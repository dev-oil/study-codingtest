// https://school.programmers.co.kr/learn/courses/30/lessons/120806

function solution(num1: number, num2: number): number {
  return Math.trunc((num1 / num2) * 1000);
}

// test
console.log(solution(3, 2)); // 