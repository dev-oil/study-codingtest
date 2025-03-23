// https://school.programmers.co.kr/learn/courses/30/lessons/42577

// 두번째 풀이 (해시 이용)
// 최대 276.08ms, 85MB ㅋㅋㅋㅋ????
// 💡 이 풀이가 더 좋은 이유
// 직관적으로 생각할 수 있는 풀이이다. (탐구를 안해도 됨)
// 루프의 범위를 생각할 수 있다. 전화번호의 범위와 / 전화번호 부 의 범위를 생각해보자.
function solution2(phone_book: string[]): boolean {
  const phoneSet = new Set(phone_book);

  for (const v of phone_book) {
    for (let i = 1; i < v.length; i++) {
      // length 값으로 자기 자신은 결국 제외됨
      if (phoneSet.has(v.substring(0, i))) {
        return false;
      }
    }
  }

  return true;
}

// 첫번째 풀이
// 최대 135.94ms, 79MB
function solution(phone_book: string[]): boolean {
  // phone_book.sort(); // 💡 이것도 한번 들어가는 풀이

  // for (let i = 0; i < phone_book.length - 1; i++) {
  //   if (phone_book[i + 1].startsWith(phone_book[i])) {
  //     return false;
  //   }
  // }

  // 모든 전화번호에 대해서 모든 다른 전화번호가 접두사인지 확인
  // 모든 전화번호에 대해서 모든 접두사가 다른 전화번호가인지 확인
  for (let i = 0; i < phone_book.length - 1; i++) {
    for (let j = i; i < phone_book.length - 1; i++) {
      if (phone_book[i].startsWith(phone_book[j])) {
        return false;
      }
    }
  }

  return true;
}

// test
console.log(solution(['119', '97674223', '1195524421']));
