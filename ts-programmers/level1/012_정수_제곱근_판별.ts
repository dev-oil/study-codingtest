// https://school.programmers.co.kr/learn/courses/30/lessons/12934

// 💡 숫자 x의 제곱근을 반환해주는 메서드 Math.sqrt()
// 💡 숫자 x를를 제곱한 값을 반환해주는 메서드 Math.pow()
function solution(n: number) {
  return Math.sqrt(n) % 1 === 0 // 나머지 값이 없다면 제곱근 ex. sqrt(3) > 1.7320508075688772
    ? Math.pow(Math.sqrt(n) + 1, 2) 
    : -1;
}

// test
console.log(solution(121));