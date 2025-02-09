// https://school.programmers.co.kr/learn/courses/30/lessons/181855

// 모든 객체 value의 개수를 배열로 변환 : Object.values()
function solution(strArr: string[]) {
  const lengthCount: Record<number, number> = {};

  strArr.forEach(str => {
      const len = str.length;
      lengthCount[len] = (lengthCount[len] || 0) + 1; // 💡 undefined 또는 0이면 기본값으로 0을 사용
  });

  return Math.max(...Object.values(lengthCount));
}



// test
console.log(solution(["a", "bc", "d", "efg", "hi"])); // 2