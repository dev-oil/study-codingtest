// https://school.programmers.co.kr/learn/courses/30/lessons/86051

import _ from 'lodash';

// lodash
function solution2(numbers: number[]): number {
  return _.sum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((v) => !numbers.includes(v)));
}

// reduce
function solution(numbers: number[]): number {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((v) => !numbers.includes(v)).reduce((x, y) => x + y);
}

// test
console.log(solution([1,2,3,4,6,7,8,0]));
console.log(solution2([1,2,3,4,6,7,8,0]));