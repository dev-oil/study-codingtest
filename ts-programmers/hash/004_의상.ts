// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes: string[][]): number {
  const clothesMap: Map<string, number> = new Map();

  for (const [_, type] of clothes) {
    clothesMap.set(type, (clothesMap.get(type) ?? 0) + 1);
  }

  let result = 1;

  for (const v of clothesMap.values()) {
    result *= v + 1;
  }

  return result - 1;
}

// test
console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);

// 객체 풀이 vs Map 풀이
// 객체로 푼 방식이 더 빨랐음 해당 문제에서는 ...
// 하지만 대용량 처리에서는 Map 이 더 우세할 수 있음

// 대용량 처리에서 더 좋은 이유 ?
// 객체 - 일반적으로 프로토타입 체인을 가지므로 키 충돌이 발생할 수 있음
// 맵 - 해시 테이블 기반으로 설계되어 키 충돌이 거의 없고, 삽입 및 삭제가 더 빠르다.

// 지금 현재 코드에서 객체가 더 빠르게 나온 이유?
// Object는 자바스크립트 엔진에서 최적화가 많이 되어 있음
//    특히 빈 객체를 사용할 때 최적화가 잘 되어 있어 속도가 빠른 경우가 많음
// Map은 내부적으로 메모리를 더 많이 사용해서 오히려 적은 데이터에서는 오버헤드가 발생할 수 있음
