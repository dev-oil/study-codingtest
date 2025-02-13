// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x: number): boolean {
  let sum = 0;
  
  for (const v of [...String(x)]) {
    sum += Number(v);
  }
  return x % sum === 0 ? true : false;
}

// test
console.log(solution(10)); // true
console.log(solution(11)); // false