// https://school.programmers.co.kr/learn/courses/30/lessons/12944

import _ from 'lodash';

function solution(arr: number[]): number {
  let answer: number = 0;

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }

  return answer / arr.length;
}

// 굿굿
function solution2(arr: number[]): number {
  return _.mean(arr);
}

console.log(solution([1,2,3,4])) // 2.5
console.log(solution2([1,2,3,4])) // 2.5