// https://school.programmers.co.kr/learn/courses/30/lessons/181844

// 💡 배열 교집합 차집합
// 사실상 제외(차집합)만 골랐으면 됐음..
function solution2(arr: number[], delete_list: number[]): number[] {
  return arr.filter((v) => !delete_list.includes(v));
}

// 첫번째 풀이...
function solution(arr: number[], delete_list: number[]): number[] {
  const common = arr.filter((v) => delete_list.includes(v));
  return arr.filter((v) => !common.includes(v));
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])); // [ 293, 395, 678 ]
console.log(solution2([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])); // [ 293, 395, 678 ]
