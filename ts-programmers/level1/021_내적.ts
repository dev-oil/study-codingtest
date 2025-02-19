// https://school.programmers.co.kr/learn/courses/30/lessons/70128

import _ from 'lodash';

// reduce
function solution2(a: number[], b: number[]): number {
  return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
// fold 한 방식이 아님
// (a[i] * b[i]) + (a[i] * b[i]) + (a[i] * b[i]) + (a[i] * b[i]) = -3 + -1 + 0 + 8 = 4

function solution5(a: number[], b: number[]): number {
  return a.reduce((acc, curr, i) => acc + (curr * b[i]), 0);
}
// fold?
// (0 + (1 * -3)) + (-3 + (2 * -1)) + (-4 + (3 * 0)) + (-4 + (4 * 2)) = -3 + -5 + 0 + 8 = 0

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

// lodash 다른방식
function solution4(a: number[], b: number[]): number {
  return _.sum(_.zip(a, b).map(([a, b]) => a * b));
}

// test
console.log(solution([1,2,3,4], [-3,-1,0,2]));
console.log(solution2([1,2,3,4], [-3,-1,0,2]));
console.log(solution3([1,2,3,4], [-3,-1,0,2]));
console.log(solution4([1,2,3,4], [-3,-1,0,2]));