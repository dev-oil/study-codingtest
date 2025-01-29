// https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a: number, b: number): number {
  let answer: number = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }

  return answer;
}

// test
console.log(solution(3, 5)); // 12
console.log(solution(5, 3)); // 12
