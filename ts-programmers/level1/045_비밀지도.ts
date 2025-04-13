// https://school.programmers.co.kr/learn/courses/30/lessons/17681

{
  // 두번째 풀이

  // 첫번째 풀이
  const toBinary = (arr: number[], n: number): string[] => {
    return arr.map((v) => {
      const value = v.toString(2);

      if (value.length < n) return '0'.repeat(n - value.length) + value;
      return value;
    });
  };

  function solution(n: number, arr1: number[], arr2: number[]): string[] {
    const changedArr1 = toBinary(arr1, n);
    const changedArr2 = toBinary(arr2, n);

    return changedArr1
      .map((v, i) => [v, changedArr2[i]])
      .map(([v1, v2]) =>
        [...v1].map((t, i) => (t === '1' || v2[i] === '1' ? '#' : ' ')).join('')
      );
  }

  // test
  console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
}
