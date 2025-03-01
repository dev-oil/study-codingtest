// https://school.programmers.co.kr/learn/courses/30/lessons/12982

// 두번째 풀이
function solution2(d: number[], budget: number): number {
  let count = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (budget < d[i]) {
      break;
    }
    budget -= d[i];
    count++;
  }

  return count;
}

// 첫번째 풀이
function solution(d: number[], budget: number): number {
  let count = 0;

  d.sort((a, b) => a - b).forEach((v) => {
    if (budget >= v) {
      budget -= v;
      count++;
    }
  });

  return count;
}

// 💡 쉼표 연산자
function solution3(d: number[], budget: number): number {
  return d
    .sort((a, b) => a - b)
    .filter((v) => (budget - v >= 0 ? ((budget = budget - v), 1) : 0)).length;
}

// 최대한 많은 부서의 물품을 구매해 주고싶다면?
// 낮은 금액부터 지원하면 되지 않을까용?

// test
console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4

console.log(solution2([1, 3, 2, 5, 4], 9)); // 3
console.log(solution2([2, 2, 3, 3], 10)); // 4
