// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n: number): number {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}

// 💡 진수 변환
// toString() / parseInt()
// 숫자.toString(n) - 10진수 -> n 진수 변환
// parseInt(숫자, n) - n진수 -> 10 진수 변환

// test
console.log(solution(45)); // 7
