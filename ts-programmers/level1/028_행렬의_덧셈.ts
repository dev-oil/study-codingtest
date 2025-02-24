// https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1: number[][], arr2: number[][]): number[][] {
  return arr1.map((v, i) => v.map((val, j) => val + arr2[i][j]));
}

// test
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
