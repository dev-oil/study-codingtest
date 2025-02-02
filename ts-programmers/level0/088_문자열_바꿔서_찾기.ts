// https://school.programmers.co.kr/learn/courses/30/lessons/181864

function solution(myString: string, pat: string): number {
  return [...myString].map((v) => v === 'A' ? 'B' : 'A').join("").includes(pat) ? 1 : 0;
}

// test
console.log(solution("ABBAA", "AABB"));