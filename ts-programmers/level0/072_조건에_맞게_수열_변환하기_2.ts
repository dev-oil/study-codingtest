// https://school.programmers.co.kr/learn/courses/30/lessons/181881

function solution(arr: number[]): number {
  let answer: number = 0;
  let before: number[];

  while (true) {
    before = [...arr]; 

    arr = arr.map((v) => {
      if (v >= 50 && v % 2 === 0) return v / 2; 
      if (v < 50 && v % 2 === 1) return v * 2 + 1; 
      return v; 
    });

    answer++;

    if (arr.every((v, idx) => v === before[idx])) break;
  }

  return answer - 1; 
}

// test
console.log(solution([1, 2, 3, 100, 99, 98])); // 5