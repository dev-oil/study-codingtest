{
  // https://school.programmers.co.kr/learn/courses/30/lessons/42889
  // 제한: N ≤ 500, stages ≤ 200,000 → stages는 한 번만 훑기
  // 설계: stages 한 번 훑어 스테이지별 분자(그 스테이지에 멈춘 사람 수) 카운팅
  //      → 분모는 stages.length에서 시작, 스테이지 지날 때마다 직전 분자만큼 차감
  //      → [{ stage, fail: 분자/분모 }] 객체 배열 생성 (번호 오름차순)
  //      → fail 내림차순 sort → stage만 뽑아 반환
  // 동률: sort는 안정 정렬(ES2019+)이라 번호 오름차순으로 만들어뒀으면 작은 번호가 먼저 → 별도 처리 불필요
  // 엣지: 도달 유저 0명이면 0/0 = NaN → 실패율 0으로 분기
  
  // [ 1차 풀이 ] ==========================================
  // readonly number[]: "이 함수는 stages를 읽기만 한다"는 컴파일 타임 계약
  // - readonly 배열 타입에는 push/sort 같은 변경 메서드가 아예 없음 → 어기면 'sort' does not exist 에러
  // - 런타임엔 아무 영향 없음. 호출자는 평범한 number[]를 그대로 넘겨도 됨 (number[] → readonly 대입은 항상 허용)
  // - slice·map·toSorted처럼 '새 배열을 반환'하는 메서드는 readonly에서도 사용 가능 (복사본은 내 소유라 변경도 자유)
  const solution = (N: number, stages: readonly number[]): number[] => {
    // 1. 오름차순 객체 배열 생성
    const stageFailList = Array.from({ length: N + 2 }, (_, i) => ({ stage: i, fail : 0 }));

    // 2. 분자 카운트 (stages 한번 훑기)
    for (const s of stages) {
      stageFailList[s].fail += 1; // 우선 분자만 카운트
    }
    
    // 3. fail 값 계산: 분자(현재 스테이지 인원) / 분모(남은 인원, 지날 때마다 차감)

    let remainingPlayers = stages.length;
    
    for (const s of stageFailList) {
      const count = s.fail;

      s.fail = remainingPlayers === 0 ? 0 : s.fail / remainingPlayers;

      remainingPlayers = remainingPlayers - count;
    }

    // 4. 리스트 맨 앞, stage clear 과 같은 버퍼 데이터 지우고, 실패율 기준으로 내림차순 진행. 이후 stage 값만 배열로 반환.
    return stageFailList.slice(1, N + 1).sort((a, b) => b.fail - a.fail).map((v) => v.stage);
  };

  // test
  console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
  console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]
  console.log(solution(3, [1, 1])); // [1, 2, 3] — 모두 1에서 멈춤 → 2·3번은 도달자 0명(분모 0), 동률은 작은 번호부터

  // [ 2차 풀이 - 리팩터링 ] ==========================================
  // 목표: ① counts와 실패율 계산 분리 ② 객체 배열은 1~N번만 생성해 slice 제거(i + 1) ③ sort 대신 toSorted
  const solutionFP = (N: number, stages: readonly number[]): number[] => {
    // 1. 카운트와 실패율 계산 분리를 위해 카운트 배열 새로 생성.
    const counts = Array.from({ length: N + 2 }, () => 0);
    
    for (const s of stages) {
      counts[s] += 1;
    }

    // 2. stage 번호 별로 fail 값 계산을 진행해서 각 번호 별 계산 값을 포함한 객체 배열 만들기
    let remainingPlayers = stages.length;

    const failRates = Array.from({ length: N }, (_, i) => {
      // 차감 전의 remainingPlayers가 이번 스테이지의 분모 (계산 → 차감 순서가 바뀌면 조용히 틀림)
      const fail = remainingPlayers === 0 ? 0 : counts[i + 1] / remainingPlayers;
      
      remainingPlayers = remainingPlayers - counts[i + 1];
      
      return {stage: i + 1, fail}
    })

    // ES2023 복사 반환 패밀리: toSorted / toReversed / toSpliced / with(i, v) — 전부 원본 그대로 두고 새 배열 반환
    return failRates.toSorted((a, b) => b.fail - a.fail).map((v) => v.stage);
  };

  // 2. test
  console.log(solutionFP(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
  console.log(solutionFP(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]
  console.log(solutionFP(3, [1, 1])); // [1, 2, 3]
}