// https://school.programmers.co.kr/learn/courses/30/lessons/138477

// 두번째 풀이 (생각해보니 정렬 할 필요가 없음)
function solution2(k: number, score: number[]): number[] {
  let hof: number[] = [];

  return score.map((v) => {
    if (hof.length < k) {
      hof.push(v);
    } else {
      const min = Math.min(...hof);
      if (v > min) {
        hof[hof.indexOf(min)] = v;
      }
    }
    return Math.min(...hof);
  });
}

// 첫번째 풀이
function solution(k: number, score: number[]): number[] {
  let hof: number[] = [];
  return score.map((v) => {
    hof.push(v);
    hof.sort((a, b) => b - a);
    hof = hof.slice(0, k);

    return Math.min(...hof);
  });
}

// test
console.log(solution2(3, [10, 100, 20, 150, 1, 100, 200]));
