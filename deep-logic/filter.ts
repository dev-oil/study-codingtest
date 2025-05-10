{
  // filter 함수 직접 구현하기
  const numbers = [1, 2, 3, 4];

  function filterForMe<T>(
    arr: T[],
    callback: (value: T, index: number, array: T[]) => boolean
  ): T[] {
    const result: T[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }

    return result;
  }

  // test
  const evenNumbers = filterForMe(numbers, (num) => num % 2 === 0);
  console.log(evenNumbers);
}
