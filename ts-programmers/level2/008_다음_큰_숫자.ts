// https://school.programmers.co.kr/learn/courses/30/lessons/12911

// 💡 함수 자르기 참고 - level2 004 문제
// toBinaryCountOne을 더 잘라야 할까요?

// 두번째 풀이 - 조건 더 줄여보기, 깔끔 코드(?!) 만들기
function toBinaryCountOne(n: number): number {
  return [...n.toString(2)].filter((v) => v === '1').length;
}

function solution2(n: number): number {
  const nBinary: number = toBinaryCountOne(n);
  let answer: number = n;

  while (toBinaryCountOne(++answer) !== nBinary);

  return answer;
}

// 첫번째 풀이
function solution(n: number): number {
  let answer: number = n + 1;
  let nBinary: number = toBinaryCountOne(n);
  let answerBinary: number = 0;

  while (answerBinary !== nBinary) {
    answer++;
    answerBinary = toBinaryCountOne(answer);
  }
  return answer;
}

// test
// console.log(solution(15)); // 23
console.log(solution2(15));
