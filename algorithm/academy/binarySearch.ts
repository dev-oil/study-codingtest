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

// TS 풀이
// 제네릭을 적용해서 타입 안정성 + 다양한 타입의 배열에도 유연하게 대응할 수 있게 만들어보았습니다. 하지만 ===, <, > 등의 비교가 가능한 타입이어야 하므로 비교 연산을 외부에서 주입(커스텀 비교 함수)하는 방식을 적용해야합니다...
function binarySearchTS<T>(
  arr: T[],
  target: T,
  compareFn: (a: T, b: T) => number
): boolean {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const comparison = compareFn(arr[mid], target);

    if (comparison === 0) {
      return true;
    } else if (comparison < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}

// arr 적용 시
const arr2 = [
  2, 6, 13, 19, 21, 21, 23, 29, 35, 48, 62, 89, 90, 95, 99, 102, 109, 208, 629,
];
const testNum2 = 35;

const result2 = binarySearchTS<number>(arr, testNum, (a, b) => a - b);

console.log(
  result2 ? '축하합니다. 합격하셨습니다.' : '아쉽지만, 불합격하셨습니다.'
);

// 객체 적용 시
type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Bob' },
  { id: 5, name: 'Charlie' },
  { id: 8, name: 'David' },
  { id: 10, name: 'Eve' },
];

// ID 기준으로 정렬된 배열이어야 함
const targetUser: User = { id: 5, name: '' };

const compareById = (a: User, b: User): number => a.id - b.id;

const found = binarySearchTS<User>(users, targetUser, compareById);

console.log(found ? '사용자를 찾았습니다.' : '해당 사용자를 찾을 수 없습니다.');
