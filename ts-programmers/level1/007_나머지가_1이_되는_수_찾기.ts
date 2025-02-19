// https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n: number): number {
  let x: number = 0;

  while(!(n % x === 1)) {
    x++;
  }

  return x;
}