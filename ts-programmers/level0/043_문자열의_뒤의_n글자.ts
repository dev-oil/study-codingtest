// https://school.programmers.co.kr/learn/courses/30/lessons/181910

function solution(my_string: string, n: number): string {
  return my_string.slice(-n);
}

// test
console.log(solution("ProgrammerS123", 11))
