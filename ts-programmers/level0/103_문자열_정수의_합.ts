// https://school.programmers.co.kr/learn/courses/30/lessons/181849

import _ from 'lodash';

// lodash
function solution2(num_str: string): number {
  return _.sum([...num_str].map(Number));
}

// 첫번째 풀이
function solution(num_str: string): number {
  let answer: number = 0;
  
  [...num_str].forEach((v) => answer += Number(v));

  return answer;
}

// test
console.log(solution("123456789")); // 45
console.log(solution2("123456789")); // 45
