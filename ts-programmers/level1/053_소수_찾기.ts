// https://school.programmers.co.kr/learn/courses/30/lessons/12921

{
  // 1. 나눗셈 풀이
  const isPrime = (n: number): boolean => {
    if (n < 2) return false;

    for (let i = 2; i * i <= n; i++) { // i <= Math.sqrt(n)과 동일. i * i <= n은 sqrt를 매 반복 계산하지 않는 관용 표현
      if (n % i === 0) return false;
    }

    return true;
  }

  const solution = (n: number): number => {
    return Array.from({ length: n + 1 }, (_, i) => i).filter(isPrime).length;
  }

  // 1. test
  // console.log(solution(10)); // 4
  // console.log(solution(5)); // 3


  // ==========================
  // 2. 에라토스테네스의 체 풀이
  const eratosthenesSolution = (n: number): number => {
    const primeArray = Array.from({ length: n + 1 }, () => true);

    primeArray[0] = false;
    primeArray[1] = false;

    for (let i = 2; i * i <= n; i++) {
      if (primeArray[i]) {
        for (let j = i * i; j <= n; j += i) {
          primeArray[j] = false;
        }
      }
    }

    return primeArray.filter(Boolean).length;
  }

  // 2. test
  console.log(eratosthenesSolution(10)); // 4
  
}