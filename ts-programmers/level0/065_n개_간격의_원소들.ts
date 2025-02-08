// https://school.programmers.co.kr/learn/courses/30/lessons/181888

// 두번째 풀이 (filter)
function solution2(num_list: number[], n: number): number[] {
  return num_list.filter((_, i) => i % n === 0);
}


// 첫번째 풀이
function solution(num_list: number[], n: number): number[] {
  const answer: number[] = [];

  for (let i = 0; i < num_list.length; i = i + n) {
    answer.push(num_list[i]);
  }
  
  return answer;
}

// test
console.log(solution2([4, 2, 6, 1, 7, 6], 2));
