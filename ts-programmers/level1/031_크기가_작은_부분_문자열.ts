// https://school.programmers.co.kr/learn/courses/30/lessons/147355

// 두번째 풀이
function solution2(t: string, p: string): number {
  const pNum = Number(p);
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    if (Number(t.slice(i, i + p.length)) <= pNum) count++;
  }

  return count;
}

// 첫번째 풀이 (걍 생각나는대로 ~~)
function solution(t: string, p: string): number {
  const value = t.length - p.length + 1;
  const arr = [];

  for (let i = 0; i < value; i++) {
    arr.push(Number(t.slice(i, p.length + i)));
  }
  return arr.filter((v) => v <= Number(p)).length;
}

// test
// console.log(solution('3141592', '271')); // 2
// console.log(solution('500220839878', '7')); // 8

console.log(solution2('3141592', '271')); // 2
console.log(solution2('500220839878', '7')); // 8
