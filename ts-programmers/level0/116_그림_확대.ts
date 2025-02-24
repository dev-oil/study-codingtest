// https://school.programmers.co.kr/learn/courses/30/lessons/181836

function solution(picture: string[], k: number): string[][] {
  return picture.flatMap((v) => {
    const expandedRow = [...v].map((val) => val.repeat(k)).join('');
    return Array(k).fill(expandedRow);
  });
}

console.log(solution(['x.x', '.x.', 'x.x'], 3));
