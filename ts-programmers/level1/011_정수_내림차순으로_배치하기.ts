// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n: number): number {
  return Number([...String(n)].sort((a, b) => b - a).join(""));
}

// test
console.log(solution(118372)); // 873211
