// 순차 탐색 구현하기 (Linear Search)
// 배열의 첫 번째 요소부터 마지막 요소까지 차례대로 탐색하는 방법

function LinearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (key === arr[i]) return `찾는 값은 ${i} 번째에 있습니다.`;
  }
  return `찾는 값이 없습니다.`;
}

const arr = [23, 46, 34, 67, 87, 34, 27, 0, 12];
const key = 75;

console.log(LinearSearch(arr, key));

// TS 풀이
function linearSearch<T>(
  arr: T[],
  key: T,
  compareFn: (a: T, b: T) => number
): string {
  for (let i = 0; i < arr.length; i++) {
    if (compareFn(arr[i], key) === 0) {
      return `찾는 값은 ${i} 번째에 있습니다.`;
    }
  }
  return `찾는 값이 없습니다.`;
}

// 숫자 배열
const numArr = [23, 46, 34, 67, 87, 34, 27, 0, 12];
const keyNum = 34;

const compareNumbers = (a: number, b: number) => a - b;

console.log(linearSearch(numArr, keyNum, compareNumbers));

// 객체 배열을 쓴다면
type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 101, name: 'Alice' },
  { id: 203, name: 'Bob' },
  { id: 305, name: 'Charlie' },
];

const keyUser = { id: 203, name: '' };

const compareById = (a: User, b: User) => a.id - b.id;

console.log(linearSearch(users, keyUser, compareById));
