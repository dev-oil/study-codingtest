// https://school.programmers.co.kr/learn/courses/30/lessons/181842

function solution(str1: string, str2: string): number {
  return str2.includes(str1) ? 1 : 0;
}

// test
console.log(solution('abc', 'aabcc'));