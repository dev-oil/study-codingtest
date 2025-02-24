// https://school.programmers.co.kr/learn/courses/30/lessons/42586

// 가독성이 너무 안좋은것 같음
// 정리를 어떤 순서로 해야할까 ?
const solution = (progresses: number[], speeds: number[]): number[] => {
  // 1. 개발 완료 일자 배열
  const endDate: number[] = progresses.map((v, i) =>
    Math.ceil((100 - v) / speeds[i])
  );

  // 2. 일자 + 1 (다음일자)
  let baseDate: number = endDate[0];
  let count: number = 0;
  const result: number[] = [];

  endDate.forEach((v) => {
    if (v <= baseDate) {
      count++;
    } else {
      result.push(count);
      count = 1;
      baseDate = v;
    }
  });
  result.push(count);

  return result;
};

// const solution = (progresses: number[], speeds: number[]): number[] => {
//   // progresses : 개발 현재 진척도
//   // speeds : 개발 속도
//   return progresses.map((v, i) => {
//     let count = 0;
//     for (let j = v; j < 100; j += speeds[i]) {
//       count++;
//     }
//     return count;
//   });
// };

// test
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
