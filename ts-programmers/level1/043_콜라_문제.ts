// https://school.programmers.co.kr/learn/courses/30/lessons/132267

// 두번째 풀이 - 재귀로 구현하기 0.82ms
function solution2(a: number, b: number, n: number): number {
  if (n < a) return 0;

  const exchange = Math.floor(n / a) * b;

  return exchange + solution2(a, b, exchange + (n % a));
}

// 첫번째 풀이 0.37ms
function solution(a: number, b: number, n: number): number {
  let answer: number = 0;

  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }

  return answer;
}

// test
console.log(solution2(3, 1, 20));
