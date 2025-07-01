// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k: number, m: number, score: number[]): number {
  // 1. 높은 점수부터 정렬
  const sorted = [...score].sort((a, b) => b - a);

  // 2. 상자에 담을 수 있는 사과만 추출 (m의 배수만큼)
  const validScores = sorted.slice(0, Math.floor(score.length / m) * m);

  // 3. m개씩 나누기 (2차원 배열로 변환)
  const boxes = Array.from({ length: validScores.length / m }, (_, i) =>
    validScores.slice(i * m, (i + 1) * m)
  );

  console.log(boxes);

  // 4. 각 상자별 최소 점수 * m 계산
  const profits = boxes.map((box) => Math.min(...box) * m);

  // 5. 총합 반환
  return profits.reduce((a, b) => a + b, 0);
}

// test
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
