// https://school.programmers.co.kr/learn/courses/30/lessons/68644

import _, { set } from 'lodash';

// 제너레이터
function* mapGenIter<T, U>(
  iter: Iterable<T>,
  f: (x: T) => U
): IterableIterator<U> {
  for (const item of iter) {
    yield f(item);
  }
}

function* combinationsGen(arr: number[], n: number): Iterable<number[]> {
  if (n === 0) {
    yield [];
    return;
  }

  if (arr.length < n) return; // 이거 없으면 Maximum call stack size exceeded 에러 뜸

  const [first, ...rest] = arr;

  yield* mapGenIter(combinationsGen(rest, n - 1), (comb) => [first, ...comb]);
  yield* combinationsGen(rest, n);
}

function solution3(numbers: number[]): number[] {
  let answer: Set<number> = new Set();

  for (const v of combinationsGen(numbers, 2)) {
    answer.add(_.sum(v));
  }

  return [...answer].sort((a, b) => a - b);
}

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
// console.log(solution2([2, 1, 3, 4, 1]));
console.log(solution3([2, 1, 3, 4, 1]));
