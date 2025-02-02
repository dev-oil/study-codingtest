// https://school.programmers.co.kr/learn/courses/30/lessons/181869

function solution(my_string: string): string[] {
  return my_string.split(' ');
}

// test
console.log(solution("i love you")); // [ 'i', 'love', 'you' ]
console.log(solution("programmers")); // [ 'programmers' ]
