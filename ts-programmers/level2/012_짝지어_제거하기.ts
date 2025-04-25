// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s: string): number {
  const answer: string[] = []; // stack - LIFO

  for (const char of s) {
    const top = answer.at(-1); // 가장 위 문자

    if (top && top === char) {
      answer.pop();
    } else {
      answer.push(char);
    }
  }

  return answer.length ? 0 : 1;
}

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0
