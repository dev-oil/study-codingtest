// https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers: number[], n: number): number {
  let answer: number = 0;

  for (const v of numbers) {
    answer += v;
    
    if (answer > n) break;
  }

  return answer;
}

// test
console.log(solution([34, 5, 71, 29, 100, 34], 123));