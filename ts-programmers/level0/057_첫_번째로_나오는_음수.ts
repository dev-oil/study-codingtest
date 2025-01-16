// https://school.programmers.co.kr/learn/courses/30/lessons/181896

function solution(num_list: number[]): number {
  for(let i = 0; i < num_list.length; i++) {
    if(num_list[i] < 0) {
      return i;
    }
  }
  return -1;
}

// test
console.log(solution([12, 4, 15, 46, 38, -2, 15])); // 5
console.log(solution([13, 22, 53, 24, 15, 6])); // -1