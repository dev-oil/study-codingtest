// https://school.programmers.co.kr/learn/courses/30/lessons/136798

{
  /** 
   * 특정 숫자의 약수 개수를 계산.
   */
  const countDivisors = (num: number): number => {
    let count: number = 0;

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        count += i === num / i ? 1 : 2;
      }
    }

    return count;
  }

  /**
   * 1부터 주어진 수까지 각 수의 약수 개수를 배열로 반환.
   */
  const calculateDivisorCounts = (num: number): number[] => Array.from({ length: num }, (_, i) => countDivisors(i + 1));

  /**
   * 전체 기사단의 무기를 만들기 위해 필요한 철의 총 무게를 계산함.
   * 제한 수치를 초과하는 경우 power로 대체.
   */
  const solution = (number: number, limit: number, power: number): number => calculateDivisorCounts(number).map((count) => count > limit ? power : count).reduce((acc, val) => acc + val, 0);
  

  // test
  console.log(solution(5, 3, 2)); // 10
  console.log(solution(10, 3, 2)); // 21
}