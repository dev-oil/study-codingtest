// https://school.programmers.co.kr/learn/courses/30/lessons/12934

// 💡 맞는 이유가 숨겨진 코드를 만들지 말자 (숨겨진 성질)
// [3] Good version
function solution3(n: number): number {
  const x = Math.sqrt(n);
  return Number.isInteger(x) ? (x + 1) ** 2 : -1; // 💡 Number.isInteger 정수 확인하기 함수
}

// [3-1] Hmm.. version
// 맞다. 맞는 이유가 숨겨져있다. 맞게생겻는데 맞는코드, 틀리게생겻는데 맞는코드...
// 그냥 표면적으로 맞다가 드러나게 작성해주면 된다.
function solution3_1(n: number): number {
  const a = Math.sqrt(n) + 1;

  return Number.isInteger(a) ? a * a : -1;
}
// 숨겨진 성질 : a가 정수라면 a + 1도 정수이다. 즉, Number.isInteger(a) -> Number.isInteger(a + 1)

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
