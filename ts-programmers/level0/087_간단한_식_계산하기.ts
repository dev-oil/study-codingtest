// https://school.programmers.co.kr/learn/courses/30/lessons/181865

// 💡 이쁜 코드(함수)에 대해서 ...
// >> KEY1 : 좋은 함수는 일을 적게하는 것이 좋다 <<
// >> KEY2 : 좋은 함수는 설명이 쉬워야 한다 <<

// 1과 2를 비교하면서 좋은 코드에 대해 알아보자

// 왜 1, 2의 풀이 보다 3의 풀이가 더 좋은 코드일까?
// 3번이 좋다면, 오히려 return 시 Number()를 한번 더 사용하기 때문에 오히려 더 피로한 사항 아닐까?

// 1) 일을 적게 하지 않는 경우
// Number로 변환하기 위해 함수 동작에 추가적으로 Number() 변환을 더 작성해주어야 한다.
function runOp1(binomial: string): number {
  const [aStr, op, bStr] = binomial.split(' ');

  const a = Number(aStr);
  const b = Number(bStr); 

  const ops: Record<string, (x: number, y: number) => number> = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };

  return ops[op](a, b);
}

console.log(runOp1("3 + 5")); // 8

// 2) 설명이 쉽지 않은 경우
// 만약 function runOp(op: "+" | "-" | "*", x: string, y: string)
// 이런식으로 되어있다면, 상단 인자들의 타입만 보고도 어떤 함수일 지 예측할 수가 있어진다. (아 ~ 대략 계산하겠구만)
// 하지만 타입이 상단처럼 string 으로 지정된 상황 이라면? 
// 물론 문자 -> 숫자의 변환은 짐작 할 수 있겠지만, 정확한 변환을 확인하기 위해선 결국 함수를 확인해야한다는 어려움이 있다.

// 추가적으로 만약 내가 숫자를 가지고 있음에도, 해당 함수를 쓰기 위해 문자열로 변환해야하는 편의성 측면에도 어려움이 있다.
function runOp(op: "+" | "-" | "*", x: string, y: string) {
  const operations = {
    '+': (a: string, b: string) => Number(a) + Number(b),
    '-': (a: string, b: string) => Number(a) - Number(b),
    '*': (a: string, b: string) => Number(a) * Number(b),
  };

  return operations[op](x, y);
}

console.log(runOp("+", "3", "5")); // 8

// 3) Good 풀이
// 고로 상단과 같은 예제를 통해 해당 풀이가 좋은 이유를 알 수 있게 된다!
function solution2(binomial: string): number {
  let [a, op, b] = binomial.split(' ');

  const ops: Record<string, (x: number, y: number) => number> = {
    '+': (a, b) => a + b,
    '-': (a, b) =>  a - b,
    '*': (a, b) =>  a * b,
  };

  return ops[op](Number(a), Number(b));
}

console.log(solution2("43 + 12")); // 55

// 첫번째 풀이
// 자꾸 빨간 줄이 뜬다 -> number | number 타입이 명확하지 않아서 생기는 것 같음
function solution(binomial: string): number {
  let [a, op, b] = binomial.split(' ').map((v) => isNaN(Number(v)) ? v : Number(v));
  
  return op === '+' ? a + b : op === "-" ? a - b : a * b;
}

// test
// console.log(solution("43 + 12")); // 55
// console.log(solution2("43 + 12")); // 55