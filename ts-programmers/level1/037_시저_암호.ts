// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s: string, n: number): string {
  let answer: string = "";

  // 대문자 65 ~ 90
  // 소문자 97 ~ 122

  for (const v of s) {
    if (v === " ") {
      answer += " ";
      continue;
    }
    let code = v.charCodeAt(0);

    // 중복 줄이는 방법...이 생각이 나질 않는..
    if (code <= 90) {
      code = code + n > 90 ? code - 26 : code;
    } else {
      code = code + n > 122 ? code - 26 : code;
    }

    answer += String.fromCharCode(code + n);
  }

  return answer;
}

// test
// console.log(solution("AB", 1));
// console.log(solution("z", 1));
// console.log(solution("a B z", 4));
