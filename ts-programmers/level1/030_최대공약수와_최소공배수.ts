// https://school.programmers.co.kr/learn/courses/30/lessons/12940

// 최대공약수 함수
const gcd = (a: number, b: number): number => {
  while (b !== 0) {
    let temp: number = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// 최소공배수 함수
function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

// 구현 함수
function solution(n: number, m: number): number[] {
  return [gcd(n, m), lcm(n, m)];
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]

// 신기한 풀이
// function gcdlcm(a, b) {
//   let r;
//   for (var ab = a * b; (r = a % b); a = b, b = r) {}
//   return [b, ab / b];
// }

// console.log(gcdlcm(2, 5)); // [1, 10]
