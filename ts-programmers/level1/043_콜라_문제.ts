// https://school.programmers.co.kr/learn/courses/30/lessons/132267

// 두번째 풀이 - 재귀로 구현하기 0.82ms
function solution2(a: number, b: number, n: number): number {
  if (n < a) return 0;

  const exchange = Math.floor(n / a) * b;

  return exchange + solution2(a, b, exchange + (n % a)); // 꼬리 재귀 (tail recursion) 버전 하단에 정리
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

// tail recursion
function solutionTail(
  a: number,
  b: number,
  n: number,
  acc: number = 0
): number {
  if (n < a) return acc;

  const exchange = Math.floor(n / a) * b;
  const next = exchange + (n % a);

  return solutionTail(a, b, next, acc + exchange);
}

// test
console.log(solutionTail(3, 1, 20));
