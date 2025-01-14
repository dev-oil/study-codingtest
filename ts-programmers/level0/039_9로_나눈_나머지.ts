// https://school.programmers.co.kr/learn/courses/30/lessons/181914

// 첫번째 풀이
function solution(number: string):number {
  let answer = 0;

  for(const i of number) {
    answer += Number(i);
}

return answer % 9;
}

// 두번째 풀이
// 1. map 과 lodash 로 변경
// reduce는 지양하자!
// "코드의 자유도" - reduce의 경우 코드의 자유도가 매우 높음 (for 문과 비슷)
// 해당 코드를 읽고 예측 가능한 범위가 매우 넓어진다.

// 
function solution2(number: string):number {
  return _.sum(number 
    .split('').map(Number)) % 9; 
}

// test
solution("123"); // 6
solution2("123"); // 6