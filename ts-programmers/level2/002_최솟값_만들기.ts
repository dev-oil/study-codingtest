// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B){
  A.sort((a, b) => a - b); // sort 자체가 원본 파괴 A = 재할당 필요 없음
  B.sort((a, b) => b - a);

  return A.map((v, i) => v * B[i] ).reduce((x, y) => x + y);
}

// test
console.log(solution([1, 4, 2], [5, 4, 4]));