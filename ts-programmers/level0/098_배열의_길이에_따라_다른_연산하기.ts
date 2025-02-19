// https://school.programmers.co.kr/learn/courses/30/lessons/181854

// 두번째 풀이
function solution2(arr: number[], n: number): number[] {
  const isEven: boolean = arr.length % 2 === 0;

  return arr.map((v, i) => i % 2 === (isEven ? 1 : 0) ? v + n : v);
}

// 첫번째 풀이
function solution(arr: number[], n: number): number[] {
  if (arr.length % 2 === 0) {
    return arr.map((v, i) => i % 2 !== 0 ? v + n : v)
  } else {
    return arr.map((v, i) => i % 2 === 0 ? v + n : v)
  }
}

// test
console.log(solution([49, 12, 100, 276, 33], 27)); // [ 76, 12, 127, 276, 60 ]
console.log(solution2([49, 12, 100, 276, 33], 27)); // [ 76, 12, 127, 276, 60 ]