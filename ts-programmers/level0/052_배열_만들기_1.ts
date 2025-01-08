// https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n: number, k: number): number[] {
  const arr: number[] = [];

  for (let i = 1; i < n+1; i++) {
    if (i % k === 0) {
      arr.push(i);
    } 
  }

  return arr;
}

// test
console.log(solution(10, 3)); // [3, 6, 9]
console.log(solution(15, 5)); // [5, 10, 15]
