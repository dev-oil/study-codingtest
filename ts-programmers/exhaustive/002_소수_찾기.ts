// https://school.programmers.co.kr/learn/courses/30/lessons/42839

// 💡 이 문제는 순열(permutations)을 사용해야 함
// 조합 (combinations) 은 level1 035 삼총사 문제 참고

// generator 버전 순열
function* permutationsGen(numbers: string[], prefix = ''): Generator<number> {
  // prefix 에 문자열 값을 먼저 전달해야됨
  if (prefix.length > 0) {
    yield Number(prefix);
  }

  for (let i = 0; i < numbers.length; i++) {
    const next = numbers[i];
    const remaining = numbers.slice(0, i).concat(numbers.slice(i + 1));

    yield* permutationsGen(remaining, prefix + next);
  }
}

function solution2(numbers: string): number {
  const result = new Set<number>();

  for (const num of permutationsGen([...numbers])) {
    result.add(num);
  }

  return Array.from(result).filter(isPrime).length;
}

// 기본 순열 풀이
function permutations(prefix: string, numbers: string[], result: Set<number>) {
  if (prefix.length > 0) {
    result.add(Number(prefix));
  }

  for (let i = 0; i < numbers.length; i++) {
    const next = numbers[i];
    const remaining = numbers.slice(0, i).concat(numbers.slice(i + 1));
    permutations(prefix + next, remaining, result);
  }
}

// 소수 구하기
function isPrime(n: number): boolean {
  if (n < 2) return false; // 0이랑 1은 소수가 아님
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // 약수는 반드시 √n 이하의 수 중에 하나가 존재하기 때문에 sqrt로 효율적으로 확인
    if (n % i === 0) return false;
  }
  return true;
}

function solution(numbers: string): number {
  const result: Set<number> = new Set();
  permutations('', [...numbers], result);

  return Array.from(result).filter(isPrime).length;
}

// test
console.log(solution('17'));
