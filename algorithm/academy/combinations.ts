// 조합 기본 구현
function getCombinations<T>(arr: T[], r: number): T[][] {
  if (r === 0) return [[]];
  if (arr.length < r) return [];

  return arr.flatMap((v, i) => {
    const rest = arr.slice(i + 1); // 뒤에 있는 요소들만 고려
    const combs = getCombinations(rest, r - 1);
    return combs.map((c) => [v, ...c]);
  });
}

// test
console.log(getCombinations([1, 2, 3, 4], 2));
