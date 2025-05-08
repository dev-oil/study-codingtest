// https://school.programmers.co.kr/learn/courses/30/lessons/42862

{
  // 세번째 풀이 - 여러 벌 도난 / 여러 벌 보유의 경우
  // ex) lost = [2, 2, 4] / reserve = [1, 2, 3, 3, 5]

  // 전체 학생에게 1벌을 기본으로 설정
  // 각 학생에 대해 앞/뒤 친구 중 여분이 있으면 1개 빌려옴

  // 마지막에 체육복이 1개 이상인 학생 수를 세어 반환

  function solution3(n: number, lost: number[], reserve: number[]): number {
    let answer = 0;

    // 학생 기본 Map
    const studentMap = new Map<number, number>();

    // 모든 학생에게 체육복 1벌씩 주기
    for (let i = 1; i <= n; i++) {
      studentMap.set(i, 1);
    }

    // 잃은개수 빼기
    for (const student of lost) {
      studentMap.set(student, studentMap.get(student)! - 1);
    }

    // 여유분 더하기
    for (const student of reserve) {
      studentMap.set(student, (studentMap.get(student) ?? 0) + 1);
    }

    for (const [student, count] of studentMap) {
      if (count === 0) {
        const prev = student - 1;
        const next = student + 1;

        if (studentMap.get(prev) && studentMap.get(prev)! > 1) {
          studentMap.set(prev, studentMap.get(prev)! - 1);
          studentMap.set(student, 1);
        } else if (studentMap.get(next) && studentMap.get(next)! > 1) {
          studentMap.set(next, studentMap.get(next)! - 1);
          studentMap.set(student, 1);
        }
      }
    }
    for (const count of studentMap.values()) {
      if (count >= 1) answer++;
    }
    return answer;
  }

  // test
  console.log(solution3(5, [2, 2, 4], [1, 2, 3, 3, 5])); // 5

  // 두번째 풀이
  function solution2(n: number, lost: number[], reserve: number[]): number {
    const filteredLost: number[] = lost
      .filter((x) => !reserve.includes(x))
      .sort((a, b) => a - b);
    const filteredReserve: number[] = reserve.filter((x) => !lost.includes(x));

    const reserveSet: Set<number> = new Set(filteredReserve);

    let answer = n - filteredLost.length;

    for (const student of filteredLost) {
      if (reserveSet.has(student - 1)) {
        reserveSet.delete(student - 1);
        answer++;
      } else if (reserveSet.has(student + 1)) {
        reserveSet.delete(student + 1);
        answer++;
      }
    }

    return answer;
  }

  // 첫번째 풀이
  function solution(n: number, lost: number[], reserve: number[]): number {
    // 잃어버린 사람의 +1 / -1 값이 reserve에 있다면 빌려주기 완 그리고 n에 ++
    // 5명 중 못 빌린 사람을 빼면 값이 나옴

    // 누락된 조건 추가 (여분을 가지고 있는 사람 중 도난당한 경우)
    const filteredLost = lost
      .filter((x) => !reserve.includes(x))
      .sort((a, b) => a - b);
    const filteredReserve = reserve
      .filter((x) => !lost.includes(x))
      .sort((a, b) => a - b);

    for (const lostStudent of filteredLost) {
      const idx = filteredReserve.findIndex(
        (v) => v === lostStudent - 1 || v === lostStudent + 1
      ); // findIndex(callback) 여기서 인자 v 는 filteredReserve의 각 요소가 들어옴

      if (idx !== -1) {
        filteredReserve.splice(idx, 1);
        n++;
      }
    }

    return n - filteredLost.length;
  }

  // test
  // console.log(solution(5, [2, 4], [1, 3, 5])); // 5
  // console.log(solution2(5, [2, 4], [1, 3, 5])); // 5
}
