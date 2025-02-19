// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr: number[], divisor: number): number[] {
  const answer = arr.filter((v) => v % divisor === 0);
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

// test
console.log(solution([5, 9, 7, 10], 5)); // [5, 10]