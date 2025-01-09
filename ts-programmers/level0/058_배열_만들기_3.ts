// https://school.programmers.co.kr/learn/courses/30/lessons/181895

// 두번째 풀이 (더 짧게)
function solution2(arr: number[], intervals: number[][]): number[] {
  const [[a, b], [c, d]] = intervals;

  return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)]
}

// 첫번째 풀이
function solution(arr: number[], intervals: number[][]): number[] {
  const [[a, b], [c, d]] = intervals;

  const firstArr = arr.slice(a, b + 1);
  const secondArr = arr.slice(c, d + 1);

  return firstArr.concat(secondArr);
}

// test
console.log(solution([1, 2, 3, 4, 5], [[1, 3], [0, 4]])); // [ 2, 3, 4, 1, 2, 3, 4, 5]
console.log(solution2([1, 2, 3, 4, 5], [[1, 3], [0, 4]])); // [ 2, 3, 4, 1, 2, 3, 4, 5]

