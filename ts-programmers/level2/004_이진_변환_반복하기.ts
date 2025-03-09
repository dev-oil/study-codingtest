// https://school.programmers.co.kr/learn/courses/30/lessons/70129

// 💡 idiom, 관용구
// xs.reduce((x, y) => x + y);
// countZero += str.split('0').length - 1;

function solution(s: string): number[] {
  let str: string = s;
  let count: number = 0;
  let removeZeroCount: number = 0;

  while (str !== '1') {
    count++;

    const zeroCount = countZero(str);
    removeZeroCount += zeroCount;

    const withoutZero = removeZero(str);
    str = toBinary(withoutZero.length);
  }

  return [count, removeZeroCount];
}

// 0 의 개수를 세는 함수
function countZero(str: string) {
  let count = 0;
  for (const x of str) {
    if (x === '0') count++;
  }
  return count;
}

// 0 제거 함수
function removeZero(str: string): string {
  return str.replaceAll('0', '');
}

// 2진법 변환 함수
function toBinary(num: number): string {
  return num.toString(2);
}

// test
console.log(solution('110010101001'));
