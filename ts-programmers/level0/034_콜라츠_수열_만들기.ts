
// https://school.programmers.co.kr/learn/courses/30/lessons/181919

// 첫번째 풀이
function solution(n: number) {
  let answer: number[] = [];

  while (n !== 1) {
    answer.push(n);
    n = (n % 2 === 0) // 삼항 연산자 줄바꿈 컨벤션
      ? n / 2 
      : 3 * n + 1;
  }
  answer.push(n);

  return answer;
}

// 두번째 풀이 AS-IS
// 이것도 return이 필수
function solution2(n: number, arr: number[] = []): number[] {

  if (n === 1) {
    return [...arr, n]; // ... 로 새로운 배열 리턴
  }

  if (n % 2 === 0) {
    return solution2(n / 2, [...arr, n]); 
  }

  return solution2(3 * n + 1, [...arr, n]);
}

// 두번째 풀이 TO-BE 들
// 재귀 호출에서 return을 사용할지 여부는 재귀 호출 결과를 연결할 필요가 있는지에 따라 결정
// 외부 상태를 직접 수정하는 방식(solution3)
function solution3(n: number): number[] {
  const arr: number[] = []

  function go(n: number) {
    arr.push(n);

    if (n === 1) {
      return;
    }

    if (n % 2 === 0) {
      go(n / 2); 
      return;
    }

    go(3 * n + 1);
  }

  go(n)
  return arr;
}

// 재귀 호출에서 return을 사용할지 여부는 재귀 호출 결과를 연결할 필요가 있는지에 따라 결정
// 재귀 호출 결과를 연결하는 방식(solution4, solution5)
// 쉽게 말하면 반드시 return이 필요 solution2와 동일 
// return이 없다면? undefined 반환
function solution4(n: number): number[] {
  if (n === 1) {
    return [n]; // n이 1이면 배열에 n만 담아 반환
  }

  if (n % 2 === 0) {
    return [n, ...solution4(n / 2)]; // n을 배열에 추가하고 재귀 호출 결과를 이어 붙임
  }

  return [n, ...solution4(3 * n + 1)]; // n을 배열에 추가하고 재귀 호출 결과를 이어 붙임
}


function solution5(n: number): number[] {
  return n== 1
  ? [1]
  : [n, ...solution5(n %2 === 0  ? n / 2 : 3* n + 1)];
}

export {};

// test
console.log(solution(10)); // [ 10, 5, 16, 8, 4, 2,  1 ]
console.log(solution2(10)); // [ 10, 5, 16, 8, 4, 2,  1 ]
console.log(solution3(10)); // [ 10, 5, 16, 8, 4, 2,  1 ]
console.log(solution4(10)); // [ 10, 5, 16, 8, 4, 2,  1 ]
console.log(solution5(10)); // [ 10, 5, 16, 8, 4, 2,  1 ]
