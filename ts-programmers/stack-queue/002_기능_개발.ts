// https://school.programmers.co.kr/learn/courses/30/lessons/42586

import { zip } from 'lodash';

const solution = (progresses: number[], speeds: number[]): number[] => {
  // 1. 개발 완료 일자 배열
  const endDate: number[] = zip(progresses, speeds).map(
    ([v, s]) => Math.ceil((100 - v!) / s!) // 💡 Non-null assertion operator ! (non-null 단언 연산자)
  );
  console.log(endDate);

  // 2. 일자 + 1 (다음일자)
  const [first, ...rest] = endDate;
  let baseDate = first;
  let count: number = 0;
  const result: number[] = [];

  endDate.forEach((v) => {
    if (v > baseDate) {
      result.push(count);
      count = 0;
      baseDate = v;
    }
    count++;

    // 여기서 만족하는 상태, i 번째까지구간을 result에 넣고 마지막을 만들고있는 구간이 baseDate까지고 길이 count이다.
  });
  result.push(count);

  return result;
};

// test
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
