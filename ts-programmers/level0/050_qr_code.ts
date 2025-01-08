// https://school.programmers.co.kr/learn/courses/30/lessons/181903

// 두번째 풀이
function solution2(q: number, r:number, code: string): any {
  return code.split('').filter((_, i) => i % q === r).join('');
}

// 첫번째 풀이 (생각나는대로 ~)
function solution(q: number, r:number, code: string): string {
  let answer = '';

  code.split('').forEach((v, i) => {
    if(i % q === r) {
      answer += v;
    } 
  })

  return answer;
}

// test
console.log(solution(3, 1, "qjnwezgrpirldywt")) // jerry
console.log(solution2(3, 1, "qjnwezgrpirldywt")) // jerry
