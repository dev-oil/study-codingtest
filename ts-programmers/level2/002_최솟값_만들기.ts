// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A: number[], B: number[]): number{
  A.sort((a, b) => a - b); // sort 자체가 원본 파괴 A = 재할당 필요 없음
  B.sort((a, b) => b - a);

  return A.reduce((acc, curr, i) => acc + curr * B[i], 0);
}

// test
console.log(solution([1, 4, 2], [5, 4, 4]));