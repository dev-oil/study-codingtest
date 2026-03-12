// 순열 기본 구현
function getPermutations(arr: number[]): number[][] {
  if (arr.length === 0) return [[]];

  return arr.flatMap((v, i) => {
    const rest = arr.slice(0, i).concat(arr.slice(i + 1));
    const perms = getPermutations(rest);
    return perms.map((p) => [v, ...p]);
  });
}

// test
console.log(getPermutations([1, 2, 3]));
