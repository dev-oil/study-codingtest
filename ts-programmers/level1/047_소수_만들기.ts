// https://school.programmers.co.kr/learn/courses/30/lessons/12977
// 전에 작업했던 generator 이용해서 풀이 완료했습니다

function* mapGenIter<T, U>(
  iter: Iterable<T>,
  f: (x: T) => U
): IterableIterator<U> {
  for (const item of iter) {
    yield f(item);
  }
}

function* combinationsGen(arr: number[], n: number): Iterable<number[]> {
  if (n === 0) {
    yield [];
    return;
  }

  if (arr.length < n) return;

  const [first, ...rest] = arr;

  yield* mapGenIter(combinationsGen(rest, n - 1), (comb) => [first, ...comb]);
  yield* combinationsGen(rest, n);
}

// 소수 판별 함수
function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 최종 solution 함수
function solution(nums: number[]): number {
  let count = 0;

  for (const comb of combinationsGen(nums, 3)) {
    const sum = comb.reduce((acc, val) => acc + val, 0);
    if (isPrime(sum)) count++;
  }

  return count;
}

// test
console.log(solution([1, 2, 3, 4])); // 1
