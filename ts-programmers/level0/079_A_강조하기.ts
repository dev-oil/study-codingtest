// https://school.programmers.co.kr/learn/courses/30/lessons/181874

function solution(myString: string): string {
  return [...myString].map((v) =>
      v === 'a' || v === 'A' 
      ? v.toUpperCase()
      : v.toLowerCase()
  ).join('');
}

// test
console.log(solution("abstract algebra"))