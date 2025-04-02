// https://school.programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings: string[], n: number) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}

// test
console.log(solution(['sun', 'bed', 'car'], 1));
