// https://school.programmers.co.kr/learn/courses/30/lessons/181833
import _ from 'lodash';

// 💡 이차원 배열 만들기

// Array.from 이용하기
function solution2(n: number): number[][] {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );
}

// refactor 함수형
// lodash range 함수 와우
function solution3(n: number): number[][] {
  return _.range(n).map((i) => _.range(n).map((j) => (i === j ? 1 : 0)));
}

// 첫번째 풀이
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
// console.log(solution(3)); // [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]
console.log(solution3(3)); // [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]
