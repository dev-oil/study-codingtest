// https://school.programmers.co.kr/learn/courses/30/lessons/181834

// 💡 알파벳 자체로도 크기 비교 가능!
function solution2(myString: string): string {
  return [...myString].map((v) => (v < "l" ? "l" : v)).join("");
}

// 첫번째 풀이
function solution(myString: string): string {
  const beforeLArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

  return [...myString].map((v) => (beforeLArr.includes(v) ? "l" : v)).join("");
}

// test
console.log(solution("abcdevwxyz")); // lllllvwxyz
console.log(solution2("jjnnllkkmm")); // llnnllllmm
