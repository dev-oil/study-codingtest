// https://school.programmers.co.kr/learn/courses/30/lessons/181889

function solution(num_list: number[], n: number): number[] {
  return num_list.slice(0, n);
}

// test
console.log(solution([2, 1, 6], 1)); // [2]
