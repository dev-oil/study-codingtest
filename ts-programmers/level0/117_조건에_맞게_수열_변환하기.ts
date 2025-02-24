// https://school.programmers.co.kr/learn/courses/30/lessons/181835

// 두번째 풀이
// 💡 기능 좀 나누자
function solution2(arr: number[], k: number): number[] {
  const isOdd: boolean = k % 2 === 1;
  return arr.map((v) => (isOdd ? v * k : v + k));
}

// 첫번째 풀이
function solution(arr: number[], k: number): number[] {
  return arr.map((v) => (k % 2 === 1 ? v * k : v + k));
}

// test
console.log(solution([1, 2, 3, 100, 99, 98], 3)); // [ 3, 6, 9, 300, 297, 294 ]
console.log(solution([1, 2, 3, 100, 99, 98], 2)); // [ 3, 4, 5, 102, 101, 100 ]

console.log(solution2([1, 2, 3, 100, 99, 98], 3)); // [ 3, 6, 9, 300, 297, 294 ]
console.log(solution2([1, 2, 3, 100, 99, 98], 2)); // [ 3, 4, 5, 102, 101, 100 ]
