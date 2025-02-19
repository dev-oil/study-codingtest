// https://school.programmers.co.kr/learn/courses/30/lessons/12947

import _ from 'lodash';

function solution2(x: number): boolean {
  const number = [...String(x)].map(Number);
  const sum = _.sum(number);

  return x % sum === 0;
}

function solution(x: number): boolean {
  let sum = 0;
  
  for (const v of [...String(x)]) {
    sum += Number(v);
  }
  return x % sum === 0 ? true : false; // ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
}

// test
console.log(solution(10)); // true
console.log(solution(11)); // false

console.log(solution2(10)); // true
console.log(solution2(11)); // false