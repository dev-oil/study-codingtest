// https://school.programmers.co.kr/learn/courses/30/lessons/181898?language=javascript

// 두번째 풀이 (하하)
function solution2(arr: number[], idx: number): number {
  return arr.indexOf(1, idx);
}

// 첫번째 풀이
function solution(arr: number[], idx: number): number {
  for (let i = idx; i < arr.length; i++) {
    if(arr[i] === 1) {
      return i;
    } 
  }

  return -1;
}

console.log(solution([0, 0, 0, 1], 1)); // 3
console.log(solution([1, 0, 0, 1, 0, 0], 4)); // -1
console.log(solution([1, 1, 1, 1, 0], 3)); // 3

console.log(solution2([0, 0, 0, 1], 1)); // 3
console.log(solution2([1, 0, 0, 1, 0, 0], 4)); // -1
console.log(solution2([1, 1, 1, 1, 0], 3)); // 3

