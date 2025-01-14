// https://school.programmers.co.kr/learn/courses/30/lessons/181909

function solution(my_string: string): string[] {
  return my_string.split('').map((_, idx) => my_string.slice(idx)).sort();
}

// test
console.log(solution("banana")) // [ 'a', 'ana', 'anana', 'banana', 'na', 'nana' ]