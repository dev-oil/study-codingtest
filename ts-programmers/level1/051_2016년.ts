// https://school.programmers.co.kr/learn/courses/30/lessons/12901

{
  // 1. 2016 조건 배열 만들어서 풀이
  const solution = (a: number, b: number): string => {
    const daysInMonth: number[] = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week: string[] = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

    const totalDays: number = daysInMonth.slice(0, a - 1).reduce((sum, d) => sum + d, 0) + (b - 1);
    
    return week[totalDays % 7];
  }

  // test
  console.log(solution(5, 24)); // TUE

  // 2. date 객체 이용하기
  const solution2 = (a: number, b: number): string => {
    const date2016 = new Date(2016, a - 1, b);

    return date2016.toString().slice(0, 3).toUpperCase();
  }

  // test
  console.log(solution2(5, 24)); // TUE
}