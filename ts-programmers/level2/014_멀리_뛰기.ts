// https://school.programmers.co.kr/learn/courses/30/lessons/12914

// f(n) = f(n - 2) + f(n - 1)
// DP 다이나믹 프로그래밍
// 작은 문제부터 차례대로 계산해 나가며, 결과를 테이블(배열)에 저장해서 큰 문제를 해결하는 방식
function solution4(n: number): number {
  const dp: number[] = [1, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// 재귀 + 메모이제이션
// 재귀 함수 안에서, 이미 계산한 값은 캐시에 저장해두고, 필요할 때 재사용하는 방식
function count2(block: number, memo: number[] = []): number {
  if (block < 0) return 0;
  if (block === 0) return 1;

  if (memo[block] !== undefined) return memo[block];

  return (memo[block] =
    (count2(block - 1, memo) + count2(block - 2, memo)) % 1234567);
}

function solution3(block: number): number {
  return count2(block);
}

// 실패!!
// 제너레이터 풀이
function* walk(
  block: number,
  path: number[] = []
): Generator<number[], void, unknown> {
  if (block < 0) return;
  if (block === 0) {
    yield path;
    return;
  }

  yield* walk(block - 1, [...path, 1]); // 1칸 점프
  yield* walk(block - 2, [...path, 2]); // 2칸 점프
}

function solution2(block: number): number {
  let count = 0;

  for (const _ of walk(block)) {
    count++;
  }

  return count;
}

// 실패!!
// 💡 1과 2로 block의 개수 즉, 합을 만들 수 있는 순열을 구하면 될 것 같다?
// 흠.. 1과 2를 채우면서 합이 다 되면 아웃해서 저장 하는 방식.. (너무 커짐)

function count(block: number): number {
  if (block < 0) return 0;
  if (block === 0) return 1;

  return count(block - 1) + count(block - 2);
}

function solution(block: number): number {
  return count(block);
}

// test
// console.log(solution2(4));
console.log(solution4(4));
