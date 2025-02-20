// https://school.programmers.co.kr/learn/courses/30/lessons/181839

// 두번째 풀이
function solution2(a: number, b: number): number {
  const isOdd = (num: number) => num % 2 === 1;

  return isOdd(a) && isOdd(b)
    ? (a ** 2) + (b ** 2)
    : isOdd(a) || isOdd(b)
    ? 2 * (a + b)
    : Math.abs(a - b);
}

// 첫번째 풀이
function solution(a: number, b: number): number {
  if (a % 2 === 1 && b % 2 === 1) {
    return (a ** 2) + (b ** 2);
  } else if (a % 2 === 1 || b % 2 === 1) {
    return 2 * (a + b);
  } else {
    return Math.abs(a - b); 
  }
}

// test
console.log(solution(3, 5)); // 34
console.log(solution2(3, 5)); // 34

