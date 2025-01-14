// https://school.programmers.co.kr/learn/courses/30/lessons/181908

// 첫번째 풀이
function solution(my_string: string, is_suffix: string): number {

  return my_string.split('').map((_, idx) => my_string.slice(idx)).some((str) => str === is_suffix) ? 1 : 0;

  // some? 배열 내에 조건을 만족하는 요소가 하나라도 있으면 true를 반환하는 메서드
}

// 다른 풀이 참고
// endsWith는 문자열이 지정된 접미사로 끝나는지 여부를 판단하여 true 또는 false를 반환
function solution2(my_string: string, is_suffix: string): number {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}



// test
console.log(solution("banana", "ana")) // 1
console.log(solution("banana", "wxyz")) // 0

console.log(solution2("banana", "ana")) // 1
console.log(solution2("banana", "wxyz")) // 0