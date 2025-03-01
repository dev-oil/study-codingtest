// 💡 유클리드 호제법 / 최소공배수 / 최대공약수
// <<<<< 1. 최대공약수(GCD) 구하는 법 >>>>>
// GCD(a, b) === GCD(b, a % b)
// 즉, 두 수 a 와 b 의 최대공약수는 큰 수를 작은 수로 나눈 나머지와 작은 수의 최대공약수와 같다.
// 이 과정을 반복하여 나머지가 0이 될 때, 나누는 수가 최대공약수(GCD)가 된다.

// 48÷18=2 (몫), 나머지 12 → GCD(48, 18) = GCD(18, 12)
// 18÷12=1 (몫), 나머지 6 → GCD(18, 12) = GCD(12, 6)
// 12÷6=2 (몫), 나머지 0 → GCD(12, 6) = 6 (최대공약수)

// <<<<< 2. 최소공배수(LCM) 구하는 법 >>>>>
// 최소공배수는 두 수의 곱을 최대공약수로 나누면 구할 수 있다.
// GCD(48, 18) === 6
// 48*18 / 6 === 144

// <<<<< 기본 JS 구현 >>>>>
// 최대공약수(GCD) 구하기 - 유클리드 호제법
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 최소공배수(LCM) 구하기
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 테스트 실행
console.log('GCD(48, 18):', gcd(48, 18)); // 출력: 6
console.log('LCM(48, 18):', lcm(48, 18)); // 출력: 144

// <<<<< 재귀 함수로 구현 >>>>>
// 최대공약수(GCD) 구하기
function gcdRecursive(a, b) {
  return b === 0 ? a : gcdRecursive(b, a % b);
}

// 최소공배수(LCM) 구하기
function lcmRecursive(a, b) {
  return (a * b) / gcdRecursive(a, b);
}

// 테스트 실행
console.log('GCD(48, 18):', gcdRecursive(48, 18)); // 출력: 6
console.log('LCM(48, 18):', lcmRecursive(48, 18)); // 출력: 144
