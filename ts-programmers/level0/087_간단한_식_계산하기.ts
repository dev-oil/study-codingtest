// https://school.programmers.co.kr/learn/courses/30/lessons/181865

// 두번째 풀이
// 객체를 이용한 방법 (다른사람의 풀이 답안 참고)
function solution2(binomial: string): number {
  let [a, op, b] = binomial.split(' ');

  const ops: Record<string, (x: number, y: number) => number> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  
  return ops[op](Number(a), Number(b));
}


// 첫번째 풀이
// 자꾸 빨간 줄이 뜬다 -> string | number 타입이 명확하지 않아서 생기는 것 같음
function solution(binomial: string): number {
  let [a, op, b] = binomial.split(' ').map((v) => isNaN(Number(v)) ? v : Number(v));
  
  return op === '+' ? a + b : op === "-" ? a - b : a * b;
}

// test
console.log(solution("43 + 12")); // 55
console.log(solution2("43 + 12")); // 55