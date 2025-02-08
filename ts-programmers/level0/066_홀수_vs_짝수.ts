// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list: number[]): number {
  let odd = 0;
  let even = 0;

  num_list.forEach((v, i) => {
    if (i % 2 === 0) {
      odd += v;
    } else {
      even += v;
    }
  })

  return odd > even ? odd : even;
}

console.log(solution([-1, 2, 5, 6, 3])); // 8