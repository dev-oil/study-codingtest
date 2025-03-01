// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price: number, money: number, count: number): number {
  let answer = 0;

  for (let i = 1; i <= count; i++) {
    answer += price * i
  }

  return answer > money ? answer - money : 0;
}

// 💡 우왕 등차수열의 합 가우스 공식 (남이 쓴걸 보기 위해서 알아두자..)
function solution2(price: number, money: number, count: number): number {
  let answer = price * count * (count + 1) / 2 - money;
  // 3 * 4 * 5 / 2 - 20 = 10
  return answer > 0 ? answer : 0;
}

// test
console.log(solution(3, 20, 4)); // 10