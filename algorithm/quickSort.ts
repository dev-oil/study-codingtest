/**
사용자에게 정수 배열을 입력받고, 이를 퀵 정렬 알고리즘을 사용하여 오름차순으로 정렬하는 프로그램을 작성하라.

요구 사항

1. 배열 입력: 프로그램은 사용자가 배열의 크기를 입력받고, 그 크기만큼의 정수를 입력 받아야 한다.
2. 퀵 정렬 구현: 퀵 정렬 알고리즘을 사용하여 배열을 정렬해야 한다.
3. 출력: 정렬된 배열을 출력해야 합니다.

예시
입력 예시:

배열 크기: 6
배열 요소: 10 7 8 9 1 5

출력 예시:
정렬된 배열: 1 5 7 8 9 10
 */

/**
 * 퀵 정렬 함수 - 재귀적으로 배열을 오름차순 정렬
 */

function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr.at(-1)!;
  const left = arr.filter((v, i) => v <= pivot && i !== arr.length - 1);
  const right = arr.filter((v) => v > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

/**
 * 정렬 실행 함수
 * @param size - 배열의 크기
 * @param numbers - 정렬할 숫자 배열
 * @returns 정렬된 배열 or 에러 메시지
 */
function runQuickSort(size: number, numbers: number[]): number[] | never {
  if (numbers.length !== size) {
    throw new Error(
      `입력된 배열 길이(${numbers.length})가 size(${size})와 일치하지 않습니다.`
    );
  }

  return quickSort(numbers);
}

// test
console.log(runQuickSort(6, [10, 7, 8, 9, 1, 5])); // [ 1, 5, 7, 8, 9, 10 ]
