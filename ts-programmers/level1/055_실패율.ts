{
  // https://school.programmers.co.kr/learn/courses/30/lessons/42889
  // 제한: N ≤ 500, stages ≤ 200,000 → stages는 한 번만 훑기
  // 설계: stages 한 번 훑어 스테이지별 분자(그 스테이지에 멈춘 사람 수) 카운팅
  //      → 분모는 stages.length에서 시작, 스테이지 지날 때마다 직전 분자만큼 차감
  //      → [{ stage, fail: 분자/분모 }] 객체 배열 생성 (번호 오름차순)
  //      → fail 내림차순 sort → stage만 뽑아 반환
  // 동률: sort는 안정 정렬(ES2019+)이라 번호 오름차순으로 만들어뒀으면 작은 번호가 먼저 → 별도 처리 불필요
  // 엣지: 도달 유저 0명이면 0/0 = NaN → 실패율 0으로 분기
  
  const solution = (N: number, stages: number[]): number[] => {
    // 1. 오름차순 객체 배열 생성
    const stageFailList = Array.from({ length: N + 2 }, (_, i) => ({ stage: i, fail : 0 }));

    // 2. 분자 카운트 (stages 한번 훑기)
    for (const s of stages) {
      stageFailList[s].fail += 1; // 우선 분자만 카운트
    }
    
    // 3. fail 값 계산: 분자(현재 스테이지 인원) / 분모(남은 인원, 지날 때마다 차감)

    let stagedPlayer = stages.length;
    
    for (const s of stageFailList) {
      const count = s.fail;

      s.fail = stagedPlayer === 0 ? 0 : s.fail / stagedPlayer;

      stagedPlayer = stagedPlayer - count;
    }

    // 4. 리스트 맨 앞, stage clear 과 같은 버퍼 데이터 지우고, 실패율 기준으로 내림차순 진행. 이후 stage 값만 배열로 반환.
    return stageFailList.slice(1, N + 1).sort((a, b) => b.fail - a.fail).map((v) => v.stage);
  };

  // test
  console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
  console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]
  console.log(solution(3, [1, 1])); // [1, 2, 3] — 모두 1에서 멈춤 → 2·3번은 도달자 0명(분모 0), 동률은 작은 번호부터
}