// https://school.programmers.co.kr/learn/courses/30/lessons/181872

function solution(myString: string, pat: string): string {
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}

// test
console.log(solution("AbCdEFG", "dE")); // AbCdE