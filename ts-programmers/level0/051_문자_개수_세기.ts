// https://school.programmers.co.kr/learn/courses/30/lessons/181902

// 두번째 풀이
function solution2(my_string: string): number[] {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let answer = new Array(52).fill(0);

  for (let i = 0; i < my_string.length; i++) {
    answer[alphabet.indexOf(my_string[i])]++;
  }
  return answer;
}

// 첫번째 풀이 (너무 복잡하게 생각한듯..ㅋㅋ)
function solution(my_string: string): number[] {
  const lowerCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
  const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  const alphabet = upperCase.concat(lowerCase);

  let answer: number[] = new Array(alphabet.length).fill(0);
  alphabet.forEach((v, i) => {
    my_string.split('').forEach((sv) => {
      if(v === sv) {
        answer[i] += 1;
      }
    })
  })
  
  return answer;
}

// 알파벳 소문자 & 대문자 배열 만드는 법 in JS
// const lowerCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
// const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));


// test
console.log(solution("Programmers"));
console.log(solution2("Programmers"));
