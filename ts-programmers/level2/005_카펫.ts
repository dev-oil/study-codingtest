// https://school.programmers.co.kr/learn/courses/30/lessons/42842

// 💡
function solution(brown: number, yellow: number): number[] {
  const total: number = brown + yellow;

  for (let height = 3; height <= total; height++) {
    if (total % height === 0) {
      let width: number = total / height;

      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
  return [];
}

console.log(solution(10, 2)); // [4, 3]

// 입출력 예에서 파악한 점
// brown + yellow 는 return [x, y]에서 x(가로), y(세로)의 곱이다.
// x(가로)는 y(세로)보다 크다.
// yellow = (가로 - 2) * (세로 - 2)를 만족하는지 확인해야 함 (갈색격자가 한줄로 감싸져 있는지)
