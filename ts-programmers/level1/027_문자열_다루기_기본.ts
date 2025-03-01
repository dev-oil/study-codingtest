// https://school.programmers.co.kr/learn/courses/30/lessons/12918

// 💡 정의로 끝나는 코드
function solution(s: string): boolean {
  return (s.length === 4 || s.length === 6) && /^[0-9]*$/.test(s);
}

// ㅋㅋㅋ if else로 return true / false
// A : 이 조건이 길잖아요. 조건이 길면 이렇게 명시를 해줘야 되는게 좋지 않나요?
// Q : 반대로 안그래도 긴데 또 덧붙여가지고 더 길잖아요.

// test
console.log(solution('a234')); // false
console.log(solution('1234')); // true
