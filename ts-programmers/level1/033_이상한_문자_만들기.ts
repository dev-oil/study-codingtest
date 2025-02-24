// https://school.programmers.co.kr/learn/courses/30/lessons/12930

const toggleCaseByParity = (v: string): string => {
  return [...v]
    .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
    .join("");
};

function solution(s: string): string {
  return s.split(" ").map(toggleCaseByParity).join(" ");
}

// test
console.log(solution("try hello world")); // TrY HeLlO WoRlD
