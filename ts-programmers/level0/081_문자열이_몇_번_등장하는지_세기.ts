// https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString: string, pat: string): number {
  let count: number = 0;
  let index: number = myString.indexOf(pat);

  while(index != -1) {
    count++;
    index = myString.indexOf(pat, index + 1);
  }

  return count;
}

// test
console.log(solution("banana", "ana")); // 2
console.log(solution("aaaa", "aa")); // 3