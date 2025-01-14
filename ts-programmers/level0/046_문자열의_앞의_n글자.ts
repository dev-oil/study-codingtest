// https://school.programmers.co.kr/learn/courses/30/lessons/181907

function solution(my_string: string, n: number): string {
  return my_string.slice(0, n);
}

// test
console.log(solution("ProgrammerS123", 11)) // ProgrammerS