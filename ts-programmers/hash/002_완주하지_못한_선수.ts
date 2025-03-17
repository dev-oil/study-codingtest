// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 해시 탐색
function solution2(participant: string[], completion: string[]): string {
  const map = new Map<string, number>();

  for (const v of participant) {
    map.set(v, (map.get(v) || 0) + 1);
  }

  for (const v of completion) {
    map.set(v, map.get(v)! - 1); // TypeScript는 map.get(name)이 undefined일 가능성이 있다고 경고하므로, "절대 undefined가 아니다!" 라고 보장하기 위해 ! 를 사용
  }

  for (const [v, i] of map) {
    if (i > 0) return v;
  }

  return '';
}

// 일반 순차탐색 풀이 방법 (만약 participant에 중복이 있다면, 안 돼 . . . 잘못된 풀이)
function solution(participant: string[], completion: string[]): string {
  return participant.filter((v) => !completion.includes(v)).join();
}

// test
// console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // leo
console.log(solution2(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // leo
