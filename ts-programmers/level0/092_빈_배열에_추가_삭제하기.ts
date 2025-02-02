// https://school.programmers.co.kr/learn/courses/30/lessons/181860

function solution(arr: number[], flag: boolean[]): number[] {
  const answer: number[] = [];

  arr.forEach((v, i) => {
    if (flag[i] === true) {
      answer.push(...new Array(v * 2).fill(v));
    } else {
      answer.splice(-v);
    }
  });

  return answer;
}

// test
console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]))