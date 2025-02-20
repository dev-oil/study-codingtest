// https://school.programmers.co.kr/learn/courses/30/lessons/70128

// 💡 lodash 잘 찾기와 맞는 함수 사용하기
import _ from 'lodash';

// reduce
function solution2(a: number[], b: number[]): number {
  return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
// fold 한 방식이 아님
// (a[i] * b[i]) + (a[i] * b[i]) + (a[i] * b[i]) + (a[i] * b[i]) = -3 + -1 + 0 + 8 = 4

function solution5(a: number[], b: number[]): number {
  // let answer = 0;

  // a[i] * b[i] 하고
  return _.sum(a.map((v, i) => v * b[i]))
  // 결과 값을 누적해서 더한다

  // a.reduce((acc, curr, i) => {
  //   return acc + (curr * b[i])
  // }, 0);

  // return answer;
}
// fold?
// (0 + (1 * -3)) + (-3 + (2 * -1)) + (-4 + (3 * 0)) + (-4 + (4 * 2)) = -3 + -5 + 0 + 8 = 0

// 근본
function solution3(a: number[], b: number[]): number {
  let answer: number = 0;
  
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

// lodash
function solution(a: number[], b: number[]): number {
  return _.sum(a.map((v, i) => v * b[i + 1])); // 의미 그대로 쓴게 아니고... 코드를 한번 더 생각...
}

// lodash 다른방식
function solution4(a: number[], b: number[]): number {
  return _.sum(_.zip(a, b).map(([a, b]) => a * b));
} // 💡 함수를 사용할 때도 맞는 모양이 뭘까 ??????????????????? 를 생각해야함
// 이거는 다른 배열 두개의 곱 및 합을 만들어야하는 거잔슴?
// zip 을 사용한다면 [1, -3] 이런 구조가 됨. 의도했던 모양이 만들어짐.

// test
console.log(solution([1,2,3,4], [-3,-1,0,2]));
console.log(solution2([1,2,3,4], [-3,-1,0,2]));
console.log(solution3([1,2,3,4], [-3,-1,0,2]));
console.log(solution4([1,2,3,4], [-3,-1,0,2]));
console.log(solution5([1,2,3,4], [-3,-1,0,2]));