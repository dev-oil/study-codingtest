// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

function solution(s: string): boolean {
  let count: number = 0;

  for (const v of [...s]) {
    if (count < 0) break;
    count += v === '(' ? 1 : -1;
  }

  return !count;
}

console.log(solution('()()'));
