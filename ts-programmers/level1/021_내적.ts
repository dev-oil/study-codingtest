// https://school.programmers.co.kr/learn/courses/30/lessons/70128

import _ from 'lodash';

// reduce
function solution2(a: number[], b: number[]): number {
  return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

// 근본
function solution3(a: number[], b: number[]): number {
  let answer: number = 0;
  
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

// lodash
function solution(a: number[], b: number[]): number {
  return _.sum(a.map((v, i) => v * b[i]));
}

// test
console.log(solution([1,2,3,4], [-3,-1,0,2]));
console.log(solution2([1,2,3,4], [-3,-1,0,2]));
console.log(solution3([1,2,3,4], [-3,-1,0,2]));