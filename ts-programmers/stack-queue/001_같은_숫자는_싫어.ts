// https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 💡 lodash 중복 배열 시리즈 (튜플)
// 참고로 uniq라는 중복된 배열 다 제거해주는 고마운 함수시리즈도 있다. 드뎌 찾음 ㅜ_ㅜ
import _, { isEqual } from 'lodash';

// arr의 값들을 하나씩 받아오는데 x 와 x + 1을 비교해야한다.
// x와 x + 1 의 값이 동일하면 x + 1 은 제거

// 두번째 풀이 - lodash (zip)
function solution2(arr: number[]): number[] {
  return _.zip(arr, arr.slice(1))
    .filter(([v1, v2]) => v1 !== v2)
    .map(([v]) => Number(v));
}

// zip() 마지막 undefined 때문에 경고문 뜸..
// 1. Number로 강제
// 2. v as number 도 있음 ~
// 3. _.compact() 함수도 있음. Falsy 값 (undefined, null, 0, false, "")을 제거하는 함수!

// 첫번째 풀이
function solution(arr: number[]): number[] {
  return arr.filter((v, i) => v !== arr[i + 1]);
}

// test
// console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution2([1, 1, 3, 3, 0, 1, 1])); // [1, 3, 0, 1]
console.log(solution2([4, 4, 4, 3, 3])); // [4,3]
