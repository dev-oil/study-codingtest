// https://school.programmers.co.kr/learn/courses/30/lessons/17681

{
  // 두번째 풀이
  // 💡 (v | arr2[i]) 비트연산 - v와 arr2[i]를 이진수로 변환해서 각 비트를 OR 연산한 결과를 구해주는 코드
  //     => v | arr2[i] = 9 | 30 = 31
  // 💡 padStart 자릿수 채워주는 메서드!
  function solution2(n: number, arr1: number[], arr2: number[]): string[] {
    return arr1.map((v, i) =>
      (v | arr2[i])
        .toString(2)
        .padStart(n, '0')
        .replace(/1/g, '#')
        .replace(/0/g, ' ')
    );
  }

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
  // console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
  console.log(solution2(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
}
