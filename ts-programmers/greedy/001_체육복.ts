// https://school.programmers.co.kr/learn/courses/30/lessons/42862

{
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
  console.log(solution(5, [2, 4], [1, 3, 5])); // 5
  console.log(solution2(5, [2, 4], [1, 3, 5])); // 5
}
