// https://school.programmers.co.kr/learn/courses/30/lessons/86971?language=javascript

//    /\
//   /  \
//  /\   /\
// /\ a    b

// cut 함수 정의 (그냥 배열 이용 + 가운데 연결 값이 있고 그 연결만 자른다는 가정 하에로 단순하게..)
const cut = (arr: [x: number, y: number][]): [number, number][][] => {
  const middleIndex = Math.trunc(arr.length / 2);

  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex + 1);

  return [left, right];
};

// test
console.log(
  cut([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);

function solution(n: number, wires: [number, number][]): number {
  let minDiff = n;

  for (const [cutA, cutB] of wires) {
    // 그래프 재구성 (cutA-cutB 연결 제거)
    const graph = buildGraph(n, wires, [cutA, cutB]);

    // 임의의 시작점에서 DFS 실행 (보통 1번)
    const count = dfs(1, graph, new Set(), [cutA, cutB]);

    // 두 송전탑 그룹 차이 계산
    const diff = Math.abs(n - count - count);

    // 최소값 갱신
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}

function buildGraph(
  n: number,
  wires: [number, number][],
  cutWire: [number, number]
): Map<number, number[]> {
  const graph = new Map<number, number[]>();

  for (const [a, b] of wires) {
    // 잘라낸 간선 무시
    if (
      (a === cutWire[0] && b === cutWire[1]) ||
      (a === cutWire[1] && b === cutWire[0])
    )
      continue;

    graph.set(a, [...(graph.get(a) || []), b]);
    graph.set(b, [...(graph.get(b) || []), a]);
  }

  return graph;
}

function dfs(
  node: number,
  graph: Map<number, number[]>,
  visited: Set<number>,
  cutWire: [number, number]
): number {
  visited.add(node);
  let count = 1;

  for (const next of graph.get(node) || []) {
    if (!visited.has(next)) {
      count += dfs(next, graph, visited, cutWire);
    }
  }

  return count;
}
