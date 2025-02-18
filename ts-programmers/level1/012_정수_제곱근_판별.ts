// https://school.programmers.co.kr/learn/courses/30/lessons/12934

// 쉽게 풀어보자 ㅜ_ㅜ
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
function solution2(n: number) {
  for (let x = 1; x * x <= n; x++) {
    if (x * x === n) {
      return (x + 1) ** 2;
    }
  }
  return -1;
}


// 💡 숫자 x의 제곱근을 반환해주는 메서드 Math.sqrt()
// 💡 숫자 x를 제곱한 값을 반환해주는 메서드 Math.pow()
function solution(n: number) {
  const sqr = Math.sqrt(n);
  return sqr % 1 === 0 // 나머지 값이 없다면 제곱근 ex. sqrt(3) > 1.7320508075688772
    ? Math.pow(sqr + 1, 2) 
    : -1;
}

// test
console.log(solution(121)); // 144
console.log(solution2(121)); // 144
