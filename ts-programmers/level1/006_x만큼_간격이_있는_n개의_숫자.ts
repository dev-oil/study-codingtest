// https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x: number, n: number): number[] {
  const answer: number[] = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

// test
console.log(solution(2, 5));
console.log(solution(-4, 2));