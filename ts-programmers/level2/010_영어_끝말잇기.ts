// https://school.programmers.co.kr/learn/courses/30/lessons/12981

// 두번째 풀이
// 불필요 조건 제거, 가독성을 위한 변수 적용
function solution2(n: number, words: string[]): number[] {
  let usedWords: string[] = [];

  for (const [i, v] of words.entries()) {
    if (i > 0) {
      const prevWord = words[i - 1];
      const isValid =
        prevWord[prevWord.length - 1] !== v[0] || usedWords.includes(v);

      if (isValid) {
        return [(i % n) + 1, Math.floor(i / n) + 1];
      }
    }

    usedWords.push(v);
  }

  return [0, 0];
}

// 첫번째 풀이
function solution(n: number, words: string[]): number[] {
  let usedWords: string[] = [];

  for (const [i, v] of words.entries()) {
    if (i > 0) {
      let prevWord = words[i - 1];

      if (
        prevWord[prevWord.length - 1] !== v[0] || // 끝말잇기 컷
        usedWords.includes(v) || // 중복 컷
        v.length === 1 // 한글자 컷
      ) {
        let personNumber = (i % n) + 1; // 탈락한 사람 번호 (나머지 이용 0 1 2 식으로 구함)
        let personTime = Math.floor(i / n) + 1; // 해당 사람이 몇 번째 차례인지 (몫 이용 1 1 1 / 2 2 2...)
        return [personNumber, personTime];
      }
    }

    usedWords.push(v); // 검사 끝나면 하나 추가하기
  }

  return [0, 0];
}

// test
console.log(
  solution2(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ])
);
