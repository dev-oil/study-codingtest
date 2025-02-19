// https://school.programmers.co.kr/learn/courses/30/lessons/181855

// 💡 모든 객체 value의 개수를 배열로 변환 : Object.values()
// 💡 || vs ??
//    || => falsy값 전부 계산 안함
//    ?? => null과 undefined 값만 계산 안함
// 이런 연산자를 short-circuiting 이라고 한다
// 계산 / 평가

function solution(strArr: string[]) {
  const lengthCount: Record<number, number> = {};

  strArr.forEach(str => {
      const len = str.length;
      // lengthCount[len] == false, NaN, ""
      lengthCount[len] = (lengthCount[len] ?? 0) + 1;
  });

  return Math.max(...Object.values(lengthCount));
}

// test
console.log(solution(["a", "bc", "d", "efg", "hi"])); // 2