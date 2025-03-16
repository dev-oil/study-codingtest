// 이분 탐색 구현하기 (Binary Search)
// 이분 탐색이란? 탐색할 범위를 절반씩 줄여나가는 방식으로 동작

// 이분 탐색의 동작 방식

// 배열의 중간값을 선택한다.
// 중간값과 찾고자 하는 값(타겟 값)을 비교한다.
// 타겟 값이 중간값보다 작다면 왼쪽 절반을 탐색
// 타겟 값이 중간값보다 크다면 오른쪽 절반을 탐색
// 탐색 범위를 줄여가며 같은 방식으로 반복한다.
// 값을 찾거나, 탐색 범위가 0이 될 때까지 반복한다.

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}

// test
const arr = [
  2, 6, 13, 19, 21, 21, 23, 29, 35, 48, 62, 89, 90, 95, 99, 102, 109, 208, 629,
];
const testNum = 35;
const result = binarySearch(arr, testNum);

console.log(
  result ? '축하합니다. 합격하셨습니다.' : '아쉽지만, 불합격하셨습니다.'
);
