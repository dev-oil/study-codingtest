// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s: string): string {
  const arr = s.split(' ').map(Number);
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);
  
  return `${String(minValue)} ${String(maxValue)}`;
}

// test
console.log(solution("1 2 3 4")); // 1 4