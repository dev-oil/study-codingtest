// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s: string): boolean {
  if ((s.length === 4 || s.length === 6) && /^[0-9]*$/.test(s)) {
    return true;
  } else {
    return false;
  }
}

// test
console.log(solution("a234")); // false
console.log(solution("1234")); // true