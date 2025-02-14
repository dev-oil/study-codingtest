// https://school.programmers.co.kr/learn/courses/30/lessons/76501

import _ from 'lodash';

// lodash
function solution2(absolutes: number[], signs: boolean[]): number {
  return _.sum(absolutes.map((v, i) => signs[i] ? v : v * -1));
}

// reduce
function solution(absolutes: number[], signs: boolean[]): number {
  return absolutes.map((v, i) => signs[i] ? v : v * -1).reduce((x, y) => x + y, 0);
}

// test
console.log(solution2([4,7,12], [true,false,true])); // 9
console.log(solution([4,7,12], [true,false,true]));
