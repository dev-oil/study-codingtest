// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution2(s: string): number[] {
  return [...s].map((v, i) => {
    if (i === 0) return -1;
    const idx = s.lastIndexOf(v, i - 1);
    return idx === -1 ? -1 : i - idx;
  });
}

// 💡 lastIndexOf (찾을 값, n번째부터 뒤에서 가장 마지막의 인덱스를 반환)

// 이게 내가 원했던 것...
// const solution = (s) =>
//   [...s].map((char, i) => {
//     const count = s.slice(0, i).lastIndexOf(char);
//     return count < 0 ? count : i - count;
//   });

// 실패 1
// function solution(s: string): number[] {
//   const arr = [...s];

//   return arr.map((v, i) => {
//     if (i === arr.indexOf(v)) {
//       return -1;
//     } else {
//       return i - arr.indexOf(v);
//     }
//   });
// }

// test
console.log(solution2("banana"));
