// https://school.programmers.co.kr/learn/courses/30/lessons/12945

// 💡 level1 - 035 재귀 vs for 참고
// 두번째 풀이 - 타 풀이 참고
function solution2(n: number): number {
  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = (a + b) % 1234567;
    a = b;
    b = temp;
  }

  return b;
}

// 첫번째 풀이 - 재귀 시간초과 ㅋㅋ (알고 있지만..)
function fibonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function solution(n: number): number {
  return fibonacci(n);
}

console.log(solution2(3));
