// https://school.programmers.co.kr/learn/courses/30/lessons/181851

// 두번째 풀이
function solution2(rank: number[], attendance: boolean[]): number {
  const students: number[][] = rank.map((v, i) => [i, v]); // 💡 [[번호, 등수], [...]] 형태의 튜플(배열)로 변환
  const [a, b, c]: number[][] = students.filter(([i]) => attendance[i]).sort((a, b) => a[1] - b[1]).slice(0, 3);

  return 10000 * a[0] + 100 * b[0] + c[0];
}

// 첫번째 풀이 (잘못 품) 
// 학생의 번호가 아닌 학생의 등수 일 때로 작업함
// 필요한 정보 -> 학생의 번호 (상단 튜플 배열 만들기 참고)
function solution(rank: number[], attendance: boolean[]): number {
  const [a, b, c]: number[] = rank.filter((_, i) => attendance[i] === true).sort((a, b) => a - b).slice(0, 3);

  return 10000 * a + 100 * b + c;
}

// 'attendance[i] === true'의 경우 생각해보면 attendance[i] 로 축약 가능 (그것이.. true니까)

// test
console.log(solution2([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]))