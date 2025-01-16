// https://school.programmers.co.kr/learn/courses/30/lessons/181897

function solution(n: number, slicer: number[], num_list: number[]): number[] {
  const [a, b, c] = slicer;

  if(n === 1) {
    return num_list.slice(0, b + 1);
  } else if(n === 2) {
    return num_list.slice(a);
  } else if(n === 3) {
    return num_list.slice(a, b + 1);
  } else {
    const sliced = num_list.slice(a, b + 1);
    return sliced.filter((_, i) => i % c === 0);
  }
}

// test
console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ 2, 3, 4, 5, 6 ]
