// https://school.programmers.co.kr/learn/courses/30/lessons/12926

// 두번째 풀이
// caesarCipher 함수 - 💡 modulo 연산, 정규표현식 이용 해서 리팩토링
function caesarCipher(text: string, n: number): string {
  if (text === ' ') return ' ';

  const base =
    text === text.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);

  return String.fromCharCode(((text.charCodeAt(0) - base + n) % 26) + base);
}

// solution 함수 - 커링 / 부분적용 / 일반
// 커링 버전

// 연산 중심 (operation-oriented)
// "얼마나 밀지를 먼저 정하고" → "어떤 문자를 밀지" 결정
// 여기서는 curriedCaesarCipher(n)을 먼저 고정해서 string => string 함수를 만들고 map()에 넘기기 때문에, 연산 중심 방식이 딱 맞음
const curriedCaesarCipher = (n: number) => (text: string) =>
  caesarCipher(text, n);
// 얼만큼 밀까? 문자를 줘

// 데이터 중심 (data-oriented)
// "문자 먼저 정하고" → "얼마나 밀지를 나중에 결정"
const curriedCaesarCipher2 = (text: string) => (n: number) =>
  caesarCipher(text, n);
// 문제 뭐야? 이거를 n만큼 밀게

// operation oriented
curriedCaesarCipher(7); // 문자를

// data oriented
curriedCaesarCipher2('a'); // n을

function solution3(s: string, n: number): string {
  return [...s].map(curriedCaesarCipher(n)).join('');
}

// 부분 적용 버전
const partialCaesar = (n: number) => (text: string) => caesarCipher(text, n);

// function partialCaesar(n: number) {
//   return function(text: string) {
//     return caesarCipher(text, n);
//   };
// }
function solution4(s: string, n: number): string {
  const partialN = partialCaesar(n);
  return [...s].map(partialN).join('');
}

// 일반 버전
function solution2(s: string, n: number): string {
  return [...s].map((text) => caesarCipher(text, n)).join(''); // n 값은 고정임. 더 효율적으로 할 수 있는 방법?? -> 커링! 부분적용도 있슴.
}

// 첫번째 풀이
// 💡 중복 줄이기
function solution(s: string, n: number): string {
  let answer: string = '';

  // 대문자 65 ~ 90
  // 소문자 97 ~ 122

  for (const v of s) {
    if (v === ' ') {
      answer += ' ';
      continue;
    }

    let code = v.charCodeAt(0);

    if ((code <= 90 && code + n > 90) || (code > 90 && code + n > 122)) {
      code -= 26;
    }

    answer += String.fromCharCode(code + n);
  }

  return answer;
}

// test
// console.log(solution('AB', 1));
// console.log(solution('z', 1));
// console.log(solution('a B z', 4));

console.log(solution4('a B z', 4));
