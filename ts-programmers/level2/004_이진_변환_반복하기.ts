// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s: string): number[] {
  let str: string = s;
  let count: number = 0;
  let countZero: number = 0;
  let answer: number[] = [];

  while (Number(str) !== 1) {
    count++;
    countZero += str.split("0").length - 1;
    str = str.replaceAll("0", "").length.toString(2);
  }

  answer.push(count, countZero);

  return answer;
}

// test
console.log(solution("110010101001"));
