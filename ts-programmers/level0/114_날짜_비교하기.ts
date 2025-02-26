// https://school.programmers.co.kr/learn/courses/30/lessons/181838

// 💡 new Date 방식으로 날짜 비교
function solution2(date1: number[], date2: number[]): number {
  // return new Date(date1) < new Date(date2) ? 1 : 0
  return new Date(date1[0], date1[1] - 1, date1[2]) < new Date(date2[0], date2[1] - 1, date2[2]) ? 1 : 0; // ts 에선 요롷게... monthIndex는 0부터 시작하기 때문에 조정 필요함
}

function solution(date1: number[], date2: number[]): number {
  if (date1[0] < date2[0]) {
    return 1;
  } else if (date1[0] > date2[0]) {
    return 0;
  }
  
  if (date1[1] < date2[1]) {
    return 1;
  } else if (date1[1] > date2[1]) {
    return 0;
  }
  
  if (date1[2] < date2[2]) {
    return 1;
  } else {
    return 0;
  }
}

// test
console.log(solution([2021, 12, 28], [2021, 12, 29])); // 1