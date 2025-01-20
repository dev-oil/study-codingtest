// https://school.programmers.co.kr/learn/courses/30/lessons/181879

import _ from "lodash";

// 두번째 풀이 (lodash)
function solution2(num_list: number[]): number {
  return _.size(num_list) > 10
    ? _.sum(num_list)
    : _.reduce(num_list, (acc, num) => acc * num, 1); // 흠.. reduce..
}

// 첫번째 풀이
function solution(num_list: number[]): number {
  let answer: number;

  if (num_list.length > 10) {
    answer = 0; 
    for (const num of num_list) {
      answer += num;
    }
  } else {
    answer = 1;
    for (const num of num_list) {
      answer *= num; 
    }
  }
  return answer;
}

// test
console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])); // 51
console.log(solution([2, 3, 4, 5])); // 120

console.log(solution2([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])); // 51
console.log(solution2([2, 3, 4, 5])); // 120
