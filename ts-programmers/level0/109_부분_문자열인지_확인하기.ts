// https://school.programmers.co.kr/learn/courses/30/lessons/181843

function solution(my_string: string[], target: string): number {
  return my_string.includes(target) ? 1 : 0;
}

// test
console.log(solution('banana', 'ana')); // 1
console.log(solution('banana', 'wxyz')); // 0