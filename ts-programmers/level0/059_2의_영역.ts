// https://school.programmers.co.kr/learn/courses/30/lessons/181894

function solution(arr: number[]): number[] {
  // 맨 처음 2의 index 맨 뒤의 2의 index의 값을 가져와서, arr.slice를 하면 되겠습니다?
  const start: number = arr.indexOf(2);
  const last: number = arr.lastIndexOf(2);
  const result: number[] = arr.slice(start, last + 1);

  return result.length === 0 ? [-1] : result;
}

// test
console.log(solution([1, 2, 1, 4, 5, 2, 9]));
