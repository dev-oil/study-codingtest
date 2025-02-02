// https://school.programmers.co.kr/learn/courses/30/lessons/181873

// 두번째 풀이 (replaceAll 이라는 함수가 있군)
function solution2(my_string: string, alp: string): string {
  return my_string.replaceAll(alp ,alp.toUpperCase()); // es2021
}

// 첫번째 풀이
function solution(my_string: string, alp: string): string {
  const alpUpper = alp.toUpperCase();

  return [...my_string].map((v) =>
      v === alp || v === alpUpper
      ? v.toUpperCase()
      : v.toLowerCase()
  ).join('');
}

// test
console.log(solution("programmers", "p"))
console.log(solution2("programmers", "p"))