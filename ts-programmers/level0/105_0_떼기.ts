// https://school.programmers.co.kr/learn/courses/30/lessons/181847

// 💡 string 앞 0 없애는 방법? Number()로 변환하기~
function solution(n_str: string): string {
  return String(Number(n_str));
}

console.log(solution("0000854020")); // 854020