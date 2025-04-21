// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s: string): number {
  const answer: string[] = []; // stack

  for (const text of [...s]) {
    if (answer.length > 0) {
      answer[answer.length - 1] === text ? answer.pop() : answer.push(text);
    } else {
      answer.push(text);
    }
  }

  return answer.length ? 0 : 1;
}

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0
