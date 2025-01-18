// https://school.programmers.co.kr/learn/courses/30/lessons/181882

function solution(arr) {
  return arr.map((v) => {
    if (v >= 50 && v % 2 === 0) return v / 2;
    if (v < 50 && v % 2 === 1) return v * 2;
    return v;
  })
}

// test
console.log(solution([1, 2, 3, 100, 99, 98])) // [2, 2, 6, 50, 99, 49]
