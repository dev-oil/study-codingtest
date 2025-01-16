import _ from 'lodash';

// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n: number): number {
  const numAsString = String(n);
  let answer = 0;
  
  for (let i = 0; i < numAsString.length; i++) {
    answer += Number(numAsString[i]);
  }

  return answer;
}

// lodash 한번 적용해보기 . .
function solution2(n: number): number {
  return _.sum(
    _.map(String(n), (digit) => Number(digit)) // 각 문자를 숫자로 변환 후 배열 생성
  );
}

// test
console.log(solution(123)); // 6
console.log(solution2(123)); // 6