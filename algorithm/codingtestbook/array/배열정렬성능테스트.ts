{
  // 1. bubble sort 를 이용한 방법
  const useBubbleSort = (arr: number[]): number[] => {
    const arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
      for (let j = 0; j < arrLength - i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
          const tmp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = tmp;
        }
      }
    }

    return arr;
  };

  // 2. 일반 sort 함수 사용했을 때
  const useSort = (arr: number[]): number[] => {
    return arr.sort((a, b) => a - b);
  };

  // 성능 측정용 함수
  const measureTime = <T>(
    callback: (arr: number[]) => T,
    arr: number[],
  ): [number, T] => {
    const start = Date.now();
    const result = callback(arr);
    const end = Date.now();

    return [end - start, result];
  };

  // test start
  let arr = Array.from({ length: 10000 }, (_, k) => 10000 - k);

  // bubble sort 시간 측정
  const [bubbleTime, bubbleResult] = measureTime(useBubbleSort, arr);
  console.log(`Bubble Sort Time: ${bubbleTime}ms`);

  // sort 함수 시간 측정
  arr = Array.from({ length: 10000 }, (_, k) => 10000 - k);

  const [sortTime, sortResult] = measureTime(useSort, arr);
  console.log(`Sort Function Time: ${sortTime}ms`);

  // Bubble Sort Time: 45ms
  // Sort Function Time: 0ms
}
