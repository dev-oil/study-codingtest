// https://school.programmers.co.kr/learn/courses/30/lessons/12954

// 💡 일반적으로 생각할 수 있는 부분을 확인해야함
// 간격을 x로 하는 길이 n 짜리 배열이라는 점
function solution(x: number, n: number): number[] {
  const answer: number[] = [];
  let num: number = 0;

  for (let i = 1; i <= n; i++) {
    num += x;
    answer.push(num);
  }

  return answer;
}

// test
console.log(solution(2, 5));
// console.log(solution(-4, 2));
//    3423423 
// 4395734895
// ----------