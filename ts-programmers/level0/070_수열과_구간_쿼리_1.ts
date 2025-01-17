// https://school.programmers.co.kr/learn/courses/30/lessons/181883

function solution(arr: number[], queries: number[][]): number[] {
  queries.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      arr[i] += 1;
    }
  })

  return arr;
}

// test
console.log(solution([0, 1, 2, 3, 4], [[0, 1],[1, 2],[2, 3]]))