/**
숫자 n이 주어졌을 때, n의 피보나치(Fibonacci) 수열을 출력하는 프로그램을 작성하시오.

(단, 피보나치 수를 구하는 알고리즘의 시간 복잡도는 O(n)으로 구현해야 함)

문제 설명
피보나치(Fibonacci) 수는 수학에서 다음과 같이 정의된다.
8의 피보나치 수열은 다음과 같다.

0, 1, 1, 2, 3, 5, 8, 13, 21

n의 피보나치(Fibonacci) 수를 구하는 알고리즘은 반드시 다음 형식의 함수(메서드)로 작성할 것.

unsigned long fibo(int n)
피보나치(Fibonacci) 수를 구하는 알고리즘의 시간 복잡도는 O(n)으로 구현해야 함

입력
- n 값은 프로그램 실행 시 콘솔 키보드로부터 정수의 형태로 입력 받음
- 피보나치 수열을 구하기 위하여 입력 받는 n 값의 범위는 0 ~ 20으로 함

출력
- 입력 받은 n 값에 해당하는 피보나치 수열을 콘솔 터미널에 출력함
 */

function fibo(n: number): number {
  if (n === 0) return 0; // 기본 조건 1
  if (n === 1) return 1; // 기본 조건 2

  let prev = 0; // F(0)
  let curr = 1; // F(1)

  // i = 2부터 n까지 반복
  for (let i = 2; i <= n; i++) {
    const next = prev + curr; // F(i) = F(i-1) + F(i-2)
    prev = curr; // 이전값 갱신
    curr = next; // 현재값 갱신
  }

  return curr;
}

function printFibonacciSequence(n: number): string {
  if (n < 0 || n > 20) {
    return '0~20 사이의 값을 입력해주세요.';
  }

  const sequence: number[] = [];

  for (let i = 0; i <= n; i++) {
    sequence.push(fibo(i));
  }

  return sequence.join(', ');
}

// test
console.log(printFibonacciSequence(8)); // 0, 1, 1, 2, 3, 5, 8, 13, 21
