// https://school.programmers.co.kr/learn/courses/30/lessons/12943

// 참고해서 재풀이
// 더 낫다고 생각하는 이유? 조건을 while 조건에 포함시켜서 불필요한 if() 추가 조건을 줄일 수 있었음
function solution2(num: number): number {
  let count: number = 0;

  while(num !== 1 && count !== 500) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }

  return num === 1 ? count : -1;
}

// 첫번째 풀이
function solution(num: number): number {
  let count: number = 0;

  while (num !== 1) {
    if (count > 500) {
      return -1;
    }

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }

  return count;
}

// test
console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1

console.log(solution2(6)); // 8
console.log(solution2(16)); // 4
console.log(solution2(626331)); // -1
