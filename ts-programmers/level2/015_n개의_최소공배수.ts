// https://school.programmers.co.kr/learn/courses/30/lessons/12953
// level1 030 유클리드 호제 참고

{
  /**최대 공약수 함수 */
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  }

  /**최소 공배수 함수 */
  const lcm = (a: number, b: number): number => {
    return (a * b) / gcd(a, b);
  }

  // 두 수를 받는 최소 공배수 함수를 확장하려면?
  // lcm(lcm(lcm(2, 6), 8), 14)
  // 이런식으로 계산하면 된다.
  
  const solution = (arr: number[]): number => {
    return arr.reduce((acc, cur) => lcm(acc, cur));
  }

  // test
  console.log(solution([2, 6, 8, 14])); // 168
  console.log(solution([1, 2, 3])); // 6  
}