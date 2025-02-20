// https://school.programmers.co.kr/learn/courses/30/lessons/12910

// 💡 의미 없는 기능
// 단순히 성능 문제가 아님.
// 만약 [1-1] filter에서 걸러진 값이 없다면, 빈 배열에 sort를 돌리게 된다.
// 하지만 [1]의 경우는 빈 배열에 sort를 돌릴 일이 없다. 의미 없는 sort 기능을 사용하지 않게 된다.
// 고로 [1]번이 더 좋다.

// [1]
function solution(arr: number[], divisor: number): number[] {
  const answer = arr.filter((v) => v % divisor === 0);
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

// [1-1]
function solution(arr: number[], divisor: number): number[] {
  const answer = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}

// test
console.log(solution([5, 9, 7, 10], 5)); // [5, 10]