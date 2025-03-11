// https://school.programmers.co.kr/learn/courses/30/lessons/12924

// 두번째 풀이 - 등차수열의 합 이용
// 너무 어려움.......................
function solution2(n: number): number {
  let count = 0;

  for (let i = 1; (i * (i - 1)) / 2 < n; i++) {
    if ((n - (i * (i - 1)) / 2) % i === 0) {
      count++;
    }
  }

  return count;
}

// 첫번째 풀이 (시간 초과 아웃..ㅠ)
function solution(n: number): number {
  let count: number = 0;

  for (let i = 0; i < n; i++) {
    let answer: number = 0;

    for (let j = i + 1; j <= n; j++) {
      answer += j;

      if (answer === n) {
        count++;
        break;
      } else if (answer > n) {
        break;
      }
    }
  }

  return count;
}

// test
console.log(solution2(15)); // 4
// console.log(solution(15)); // 4
