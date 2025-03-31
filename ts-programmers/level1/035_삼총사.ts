// https://school.programmers.co.kr/learn/courses/30/lessons/131705

import _ from 'lodash';

// 💡 배열 조합 함수 만들기
// 두번째 풀이 - 재귀함수 이용하여 풀이하기
// 배열a에서 n개를 뽑는방법은
// 첫번째 것을 포함하는 경우랑 안포함하는 경우 두 개를 합친 것이다

// 💡 제너레이터로 refactoring 하기
// 제너레이터는 필요할 때마다 하나씩 값을 생성하여 반환하므로, 모든 조합을 한꺼번에 메모리에 담지 않아 메모리 부담이 적다.
// 기존 방식은 모든 조합을 메모리에 저장하여 힙 메모리를 많이 사용하지만, 제너레이터는 순차적으로 생성하여 메모리 낭비를 줄인다.
// 재귀 호출로 인해 스택 메모리는 사용하지만, 힙 메모리를 최소화하여 메모리 부족 문제를 방지할 수 있다.
function* combinations(arr: number[], n: number): Iterable<number[]> {
  if (n === 0) {
    yield [];
    return;
  }

  for (let i = 0; i <= arr.length - n; i++) {
    for (const comb of combinations(arr.slice(i + 1), n - 1)) {
      yield [arr[i], ...comb];
    }
  }
}

function solution2(number: number[]): number {
  let answer = 0;

  const zeroSums = mapGenIter(
    combinations(number, 3),
    (comb) => _.sum(comb) === 0
  );

  for (const isZero of zeroSums) {
    if (isZero) answer++;
  }

  return answer;
}

// 첫번째 풀이
function solution(number: number[]): number {
  let count: number = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          count++;
        }
      }
    }
  }
  return count;
}

// test
// console.log(solution([-2, 3, 0, 2, -5])); // 2
// console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5

console.log(solution2([-2, 3, 0, 2, -5])); // 2

// 💡 Q. 메모리적으로 더 좋-은 이유?
// A. 재귀 호출을 할 때마다 함수를 다시 호출하기 때문에 stack에 계속 함수 실행 컨텍스트가 쌓이게 된다.
//    > 함수 실행 컨텍스트란? 함수가 실행될 때 생성되는 실행 환경들을 말한다. ex. 변수 / 렉시컬 / this / 호이스팅

// 💡 Q. 근데 ㅋㅋ 호출을 할때마다 함수를 호출하는건 다른 함수도 다 그런데요?
// A. 재귀 호출시에 쌓이는 호출 스택은 트리 형태로 퍼지면서 스택을 차지하게 되기 때문입니다 ㅜ..

// combinations([1, -1, 2, -2, 3, -3], 3)
//   ├── 1 + combinations([-1, 2, -2, 3, -3], 2)
//   │     ├── (-1) + combinations([2, -2, 3, -3], 1)
//   │     │     ├── (2) + combinations([-2, 3, -3], 0) ✅ [[]] 반환
//   │     │     ├── (-2) + combinations([3, -3], 0) ✅ [[]] 반환
//   │     │     ├── (3) + combinations([-3], 0) ✅ [[]] 반환
//   │     │     ├── (-3) + combinations([], 0) ✅ [[]] 반환
//   │     ├── (2) + combinations([-2, 3, -3], 1)
//   │     ├── (-2) + combinations([3, -3], 1)
//   │     ├── (3) + combinations([-3], 1)
//   ├── (-1) + combinations([2, -2, 3, -3], 2)
//   ├── (2) + combinations([-2, 3, -3], 2)
//   ├── (-2) + combinations([3, -3], 2)
//   ├── (3) + combinations([-3], 2)

// 함수 자체는 힙 메모리에 저장되며, 코드와 데이터가 함께 위치한다.
// 함수 이름이나 참조 변수는 스택에 저장되어 함수 호출 시 힙에 있는 함수를 가리킨다.
// 함수 호출 시 매개변수와 지역 변수는 스택에 저장되지만, 객체와 배열 같은 참조 타입은 힙에 저장된다.
