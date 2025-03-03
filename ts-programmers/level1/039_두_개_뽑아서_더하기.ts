// https://school.programmers.co.kr/learn/courses/30/lessons/68644

import _ from 'lodash';

// lodash - uniq 중복 배열 제거 선생님 써보기
function solution2(numbers: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  return _.uniq(result).sort((a, b) => a - b);
}

// 첫번째 풀이
function solution(numbers: number[]): number[] {
  const answer: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}

// test
console.log(solution([2, 1, 3, 4, 1]));
console.log(solution2([2, 1, 3, 4, 1]));
