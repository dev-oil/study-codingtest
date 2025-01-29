// https://school.programmers.co.kr/learn/courses/30/lessons/12916

// 두번째 풀이 (이런방법이)
function solution2(s: string): boolean {
  s = s.toLowerCase();
  return s.split("p").length === s.split("y").length;
}

// 첫번째 풀이
function solution(s: string): boolean {
  let countP = 0;
  let countY = 0;

  for (const v of s.toLowerCase()) {
    if (v === "p") countP++;
    if (v === "y") countY++;
  }

  return countP === countY;
}

// test
console.log(solution("pPoooyY")); // true
console.log(solution2("pPoooyY")); // true
