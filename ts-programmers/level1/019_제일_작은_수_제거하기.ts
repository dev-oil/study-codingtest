// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr: number[]): number[] {
  const answer = arr.filter((v) => v !== Math.min(...arr));
  return answer.length ? answer : [-1];
}

// test
console.log(solution([4,3,2,1])); // [4, 3, 2]
console.log(solution([10])); // [-1]