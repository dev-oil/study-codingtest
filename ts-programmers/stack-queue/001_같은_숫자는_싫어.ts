// https://school.programmers.co.kr/learn/courses/30/lessons/12906

// arr의 값들을 하나씩 받아오는데 x 와 x + 1을 비교해야한다.
// x와 x + 1 의 값이 동일하면 x + 1 은 제거 

function solution(arr: number[]): number[] {
  return arr.filter((v, i) => v !== arr[i + 1]);
}

// test
console.log(solution([1,1,3,3,0,1,1]));