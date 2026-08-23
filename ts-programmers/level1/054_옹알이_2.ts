{
  // https://school.programmers.co.kr/learn/courses/30/lessons/133499

  // 제한: babbling ≤ 100, 단어 ≤ 30 → 성능 무관, 정확성 집중
  // 설계: 각 단어 → 앞에서부터 4발음 중 매칭되는 걸로 잘라내기(직전 발음 기억: 같으면 실패, 아무것도 매칭 안 되면 실패) → 빈 문자열 되면 성공 → filter → length
  
  // [ 1차 풀이 ] ==========================================
  const PRONUNCIATIONS = ["aya", "ye", "woo", "ma"] as const;

  const canPronounce = (word: string): boolean => {
    let rest = word;
    let prev = '';

    while (rest !== '') {
      let matched = false;

      for (const pron of PRONUNCIATIONS) {
        if (rest.startsWith(pron)) {
          if (pron === prev) return false;

          rest = rest.slice(pron.length);
          prev = pron;
          matched = true;

          break;
        } 
      }
      
      if (matched === false) return false;
    }

    return true;
  }

  const solution = (babbling: string[]): number => {
    return babbling.filter(canPronounce).length;
  }

  // test
  console.log(solution(["aya", "yee", "u", "maa"])); // 1
  console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2

  // ==========================
  // 연습: 아래 세 버전을 직접 구현해보기 (전부 같은 테스트를 통과해야 함)

  // 2. find 버전 — flag(matched) 없이 while + .find()로
  // - find는 콜백이 처음 true가 되는 요소에서 즉시 멈추고 그 요소를 반환. 끝까지 true가 없으면 undefined(= "다 검사했는데 없음" 확정)
  // - 거르는 조건(p !== prev)은 콜백 안에 둬야 함: 콜백에서 false면 find가 안 멈추고 다음 후보로 넘어감 (바깥 if로 빼면 find가 이미 멈춘 뒤라 늦음)
  // - 조건 판정은 콜백에, 부수효과(rest·prev 갱신)는 반환값 받은 뒤 바깥에
  const canPronounceFind = (word: string): boolean => {
    let rest = word;
    let prev = '';

    while (rest !== '') {
      const pron = PRONUNCIATIONS.find((p) => rest.startsWith(p) && p !== prev);

      if (pron === undefined) return false;

      rest = rest.slice(pron.length);
      prev = pron;
    }

    return true;
  };

  // ==========================
  // 3. 재귀 FP 버전 — let/mutation 없이 .some() + 재귀로
  const canPronounceRec = (word: string, prev = ''): boolean => {
    // TODO
    return false;
  };

  // ==========================
  // 4. 정규식 버전 — 정규식 테스트 2개 조합 (연속 반복 검사 + 완전 분해 검사)
  const canPronounceRegex = (word: string): boolean => {
    // TODO
    return false;
  };

  // ==========================
  // 연습용 테스트
  const CASES: [string, boolean][] = [
    ['aya', true],
    ['ayaye', true],
    ['yemawoo', true],
    ['mayemawoo', true], // 'ma' 반복이지만 연속은 아님 → 가능
    ['yee', false],
    ['u', false],
    ['maa', false],
    ['yeye', false], // 연속 반복
    ['ayaayaa', false], // 'aya' 연속 + 잔여 문자
    ['woowo', false], // 유의사항 케이스
    ['wyeoo', false], // 'ye'를 지우면 'woo'가 남는 함정
  ];

  const testAll = (name: string, fn: (w: string) => boolean) => {
    const fails = CASES.filter(([w, expected]) => fn(w) !== expected);
    console.log(
      fails.length === 0
        ? `${name}: 모두 통과 ✅`
        : `${name}: 실패 ❌ → ${fails.map(([w]) => w).join(', ')}`,
    );
  };

  testAll('1. 원본', canPronounce);
  testAll('2. find', canPronounceFind);
  testAll('3. 재귀', canPronounceRec);
  testAll('4. 정규식', canPronounceRegex);
}
