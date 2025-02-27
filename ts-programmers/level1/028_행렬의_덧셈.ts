// https://school.programmers.co.kr/learn/courses/30/lessons/12950

// 💡 lodash zip 배열끼리 더하기 021 내적 +a
import _, { zipWith } from 'lodash';

// lodash 풀이 - zip / zipWith
function solution2(arr1: number[][], arr2: number[][]): number[][] {
  return _.zip(arr1, arr2).map(([a, b]) => _.zipWith(a, b, (x, y) => x + y));
}

// 1) _.zip() 결과
// [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 2, 3 ], [ 5, 6 ] ] ]

// 2) map 으로 값
// 2-1) a 값
//   [ 1, 2 ] [ 2, 3 ]
// 2-2) b 값
//   [ 3, 4 ] [ 5, 6 ]

// 3) zipWith
// 3-1) zipWith a, b (열로 묶기)
// [ [ [ 1, 3 ], [ 2, 4 ] ], [ [ 2, 5 ], [ 3, 6 ] ] ]
// 3-2) 후 iterate 함수 전달
//    [(1 + 3) ,(2 + 4)], [(2 + 5) ,(3 + 6)]

function solution(arr1: number[][], arr2: number[][]): number[][] {
  return arr1.map((v, i) => v.map((val, j) => val + arr2[i][j]));
}

// test
// console.log(
//   solution(
//     [
//       [1, 2],
//       [2, 3],
//     ],
//     [
//       [3, 4],
//       [5, 6],
//     ]
//   )
// );

console.log(
  solution2(
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
