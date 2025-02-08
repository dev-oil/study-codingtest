// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr: number[]): number[] {
  return arr.map((v) => new Array(v).fill(v)).flat();
}

// test
console.log(solution([5, 1, 4]))