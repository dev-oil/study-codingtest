// https://school.programmers.co.kr/learn/courses/30/lessons/12926

// 두번째 풀이
// caesarCipher 함수 - 💡 modulo 연산, 정규표현식 이용 해서 리팩토링
function caesarCipher(text: string, n: number): string {
  return text.replace(/([a-z])|([A-Z])/g, (c, lowerCase) => {
    // 콜백함수에 들어가는 인자 (match, group1, group2, ..., offset, originalString)
    const startCode = lowerCase ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
    return String.fromCharCode(
      ((c.charCodeAt(0) - startCode + n) % 26) + startCode
    );
  });
}

// solution 함수 - 커링 / 부분적용 / 일반
// 커링 버전
function curriedCaesarCipher(n: number): (text: string) => string {
  return (text) => caesarCipher(text, n);
}

function solution3(s: string, n: number): string {
  const curriedN = curriedCaesarCipher(n);
  return [...s].map(curriedN).join('');
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
