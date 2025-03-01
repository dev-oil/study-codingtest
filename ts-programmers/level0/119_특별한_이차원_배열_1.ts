// https://school.programmers.co.kr/learn/courses/30/lessons/181833

// 💡 이차원 배열 만들기

function solution2(n: number): number[][] {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );
}

function solution(n: number): number[][] {
  const answer = [];

  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(i === j ? 1 : 0);
    }
    answer.push(arr);
  }

  return answer;
}

// test
console.log(solution(3));
