// https://school.programmers.co.kr/learn/courses/30/lessons/181846

// 💡 BigInt() -> Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체
function solution(a: string, b: string): string {
  return String(BigInt(a) + BigInt(b));
}

// test
console.log(solution("18446744073709551615", "287346502836570928366"));