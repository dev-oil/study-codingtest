// https://school.programmers.co.kr/learn/courses/30/lessons/181886

function solution(names: string[]): string[] {
  return names.filter((_, i) => i % 5 === 0)
}

// test
console.log(solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])); 