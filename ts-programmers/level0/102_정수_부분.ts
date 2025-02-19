// https://school.programmers.co.kr/learn/courses/30/lessons/181850

function solution(flo: number): number {
  return Math.trunc(flo);
}

// 💡 not 연산자(~)를 두번 사용한 경우
// ~ 이란, 모든 비트를 뒤집는 연산
// 비트 NOT을 두 번 적용하면 원래 값에서 소수점이 제거된 정수 부분만 남게 됨
// 빠르지만 32비트 정수 제한이 있으며, 음수를 내림하지 않고 절삭(truncate) 처리
const solution2 = flo => ~~flo;

// test
console.log(solution(69.32));