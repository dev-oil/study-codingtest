// https://school.programmers.co.kr/learn/courses/30/lessons/181863

function solution(rny_string: string): string {
  return rny_string.replaceAll('m', 'rn');
}

// test
console.log(solution("masterpiece")); // rnasterpiece