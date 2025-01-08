// https://school.programmers.co.kr/learn/courses/30/lessons/181912

// 풀이
function solution2(intStrs: string[], k: number, s: number, l:number): number[] {
  const newIntStrs = intStrs.map((num) => parseInt(num.slice(s, s + l)));
  return newIntStrs.filter((num) => num > k);
}

// 이전 풀이
function solution(intStrs: string[], k: number, s: number, l:number): number[] {
  var answer = [];
  
  for(const i of intStrs) {
    let temp: number = parseInt(i.slice(s, s + l))
    
    if (k < temp) {
      answer.push(temp)
    }
  }
  
  return answer;
}

// test
// console.log(solution(["0123456789","9876543210","9999999999999"], 50000, 5, 5)) // [ 56789, 99999 ]
console.log(solution2(["0123456789","9876543210","9999999999999"], 50000, 5, 5)) // [ 56789, 99999 ]