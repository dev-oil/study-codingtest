// https://school.programmers.co.kr/learn/courses/30/lessons/181880

function solution(num_list: number[]): number {
  let count: number = 0;

  for(let num of num_list) {
    while (num > 1) {
      num = num % 2 === 0 
        ? num / 2
        : (num - 1) / 2;
      
        count++;
    }
  }

  return count;
}

// test
console.log(solution([12, 4, 15, 1, 14])); // 11