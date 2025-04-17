// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k: number, tangerine: number[]): number {
  const tangerineMap: Map<number, number> = new Map();

  // tangerine.sort((a, b) => a - b); // 예쁘게 넣고싶었던 불필요한 순간

  for (const size of tangerine) {
    tangerineMap.set(size, (tangerineMap.get(size) ?? 0) + 1);
  }

  const sortedTangerine = [...tangerineMap.entries()].sort(
    ([_, a], [__, b]) => b - a // === (a, b) => b[1] - a[1])
  );

  let total = 0;
  let kinds = 0;

  for (const [_, count] of sortedTangerine) {
    total += count;
    kinds++;
    if (total >= k) break;
  }

  return kinds;
}

// test
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
