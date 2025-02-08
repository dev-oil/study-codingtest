// https://school.programmers.co.kr/learn/courses/30/lessons/181858

// 💡 set 이용하여 배열 중복 제거하기
// 💡 ?? 연산자 → null 또는 undefined일 때만 오른쪽 값을 사용.
function solution(arr: number[], k: number): number[] {
  let aArr = [...new Set(arr)];

  return Array.from({ length: k }, (_, i) => aArr[i] ?? -1);
}

// test
console.log(solution([0, 1, 1, 2, 2, 3], 3)) // [ 0, 1, 2 ]