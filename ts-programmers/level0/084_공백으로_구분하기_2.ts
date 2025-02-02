// https://school.programmers.co.kr/learn/courses/30/lessons/181868

function solution(my_string: string): string[] {
  return my_string.split(' ').filter(v => v !== ''); // (v => v) : 모든 falsy 값 제거 가능
}

// test
console.log(solution("i  love  you")); // [ 'i', 'love', 'you' ]
console.log(solution("  programmers  ")); // [ 'programmers' ]