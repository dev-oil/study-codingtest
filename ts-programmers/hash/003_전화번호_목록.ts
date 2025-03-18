// https://school.programmers.co.kr/learn/courses/30/lessons/42577

// 두번째 풀이 (해시 이용)
// 최대 276.08ms, 85MB ㅋㅋㅋㅋ????
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
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}

// test
console.log(solution(['119', '97674223', '1195524421']));
