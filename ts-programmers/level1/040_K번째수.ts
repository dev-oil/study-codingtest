// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array: number[], commands: number[][]): number[] {
  return commands.map(
    ([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
  ); // from, to, k 이렇게 작성하면 잘 보이겠군..
}

// test
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
