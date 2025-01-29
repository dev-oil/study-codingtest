// https://school.programmers.co.kr/learn/courses/30/lessons/181882

function solution(arr: number[]): number[] {
  return arr.map((v) =>  
    (v >= 50 && v % 2 === 0)
      ? v / 2
      : (v < 50 && v % 2 !== 0)
      ? v * 2
      : v
    )
}

// test
console.log(solution([1, 2, 3, 100, 99, 98])) // [2, 2, 6, 50, 99, 49]
