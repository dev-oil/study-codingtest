// https://school.programmers.co.kr/learn/courses/30/lessons/131705

import _ from 'lodash';

// 💡 배열 조합 함수 만들기
// 두번째 풀이 - 재귀함수 이용하여 풀이하기
function combinations(arr: number[], n: number): number[][] {
  let res: number[][] = [];

  if (n === 1) {
    return arr.map((v) => [v]);
  }

  return arr
    .map((v, i) =>
      combinations(arr.slice(i + 1), n - 1).map((comb) => [v, ...comb])
    )
    .flat();
}

function solution2(number: number[]): number {
  const sortedArr = combinations(number, 3);
  let answer = 0;

  sortedArr.forEach((v) => {
    if (_.sum(v) === 0) answer++;
  });

  return answer;
}

// 첫번째 풀이
function solution(number: number[]): number {
  let count: number = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          count++;
        }
      }
    }
  }
  return count;
}

// test
// console.log(solution([-2, 3, 0, 2, -5])); // 2
// console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5

console.log(solution2([-2, 3, 0, 2, -5])); // 2
