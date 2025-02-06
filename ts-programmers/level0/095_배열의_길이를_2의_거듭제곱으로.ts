// https://school.programmers.co.kr/learn/courses/30/lessons/181857

// 💡 해당 숫자가 2의 거듭제곱인지 알 수 있는 방법
// 1. n & (n - 1) === 0 << 비트 연산
// 2. Math.log2() << 해당숫자를 만들기위해 2를 몇번 곱하였는지 알려주는 메서드

// 두번째 풀이
function solution2(arr: number[]): number[] {
  const newLength = 2 ** Math.ceil(Math.log2(arr.length)); // 6개일 시 2 ** 3 == 8

  return [...arr, ...new Array(newLength - arr.length).fill(0)];
}

// 첫번째 풀이
function solution(arr: number[]): number[] {
  if ((arr.length & (arr.length - 1)) === 0) return arr;
  
  let newLength = 1;
  while (newLength < arr.length) {
    newLength *= 2;
  }

  return [...arr, ...Array(newLength - arr.length).fill(0)];
}

// console.log(solution([1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 0, 0]
// console.log(solution([58, 172, 746, 89])); // [58, 172, 746, 89]

console.log(solution2([1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 0, 0]
console.log(solution2([58, 172, 746, 89])); // [58, 172, 746, 89]
