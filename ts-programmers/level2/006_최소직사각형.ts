// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes: number[][]): number {
  const sortedSize: number[][] = sizes.map(([w, h]) =>
    w > h ? [w, h] : [h, w]
  );

  const maxWidth: number = Math.max(...sortedSize.map(([w, _]) => w));
  const maxHeight: number = Math.max(...sortedSize.map(([_, h]) => h));

  return maxWidth * maxHeight;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
