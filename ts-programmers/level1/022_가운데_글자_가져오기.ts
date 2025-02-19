// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s: string): string {
  const midNum = Math.floor(s.length / 2);

  return s.length % 2 ? s[midNum] : s.slice(midNum - 1, midNum + 1);
}

// test
console.log(solution("abcde"));
console.log(solution("qwer"));