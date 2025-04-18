// https://school.programmers.co.kr/learn/courses/30/lessons/68644

import _, { set } from 'lodash';

// 일반 재귀
function combinations(arr: number[], n: number): number[][] {
  if (n === 0) {
    return [[]];
  }
  return arr.flatMap((v, i) =>
    combinations(arr.slice(i + 1), n - 1).map((comb) => [v, ...comb])
  );
}

function solution2(numbers: number[]): number[] {
  let answer: Set<number> = new Set();
  const combiArr: number[][] = combinations(numbers, 2);

  combiArr.forEach((v) => {
    answer.add(_.sum(v));
  });

  return [...answer].sort((a, b) => a - b);
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
// console.log(solution([2, 1, 3, 4, 1]));
console.log(solution2([2, 1, 3, 4, 1]));
