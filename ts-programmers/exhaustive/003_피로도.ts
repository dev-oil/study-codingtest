// https://school.programmers.co.kr/learn/courses/30/lessons/87946

{
  function getPermutations(arr: number[]): number[][] {
    if (arr.length === 0) return [[]];

    return arr.flatMap((v, i) => {
      const rest = arr.slice(0, i).concat(arr.slice(i + 1));
      return getPermutations(rest).map((p) => [v, ...p]);
    });
  }

  function solution(k: number, dungeons: number[][]): number {
    // 던전 인덱스 순열 만들기 ex. [0,1,2], [1,2,0]
    const orders = getPermutations([...Array(dungeons.length).keys()]); // 0부터 n-1까지의 숫자 배열 만드는법

    let maxCount = 0;

    // 각 순열(던전 탐험 순서)에 대해 시뮬레이션
    for (const order of orders) {
      let fatigue = k;
      let count = 0;

      for (const idx of order) {
        const [required, cost] = dungeons[idx];
        if (fatigue >= required) {
          fatigue -= cost;
          count++;
        } else {
          break;
        }
      }

      // 계속 갱신
      maxCount = Math.max(maxCount, count);
    }

    return maxCount;
  }

  // test
  console.log(
    solution(80, [
      [80, 20],
      [50, 40],
      [30, 10],
    ])
  );
}
