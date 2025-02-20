// https://school.programmers.co.kr/learn/courses/30/lessons/12922

// new Array
// 배열의 타입을 먼저 확인 할 수 있기 때문에 더 좋다고 보이는데...
function solution2(n: number): string {
  return new Array(n).fill('').map((_, i) => i % 2 === 0 ? '수' : '박').join('');
}

// Array.from
// 성능은 이게 더 좋음
function solution(n: number): string {
  return Array.from({length: n}, (_, i) => i % 2 === 0 ? '수' : '박').join('');
}

// test
console.log(solution(5)); // 수박수박수
console.log(solution2(5)); // 수박수박수