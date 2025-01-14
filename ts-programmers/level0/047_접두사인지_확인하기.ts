// https://school.programmers.co.kr/learn/courses/30/lessons/181906

function solution(my_string: string, is_prefix: string): number {
  return my_string.startsWith(is_prefix) ? 1 : 0;
}

// test
console.log(solution("banana", "ban")); // 1
console.log(solution("banana", "nan")); // 0
