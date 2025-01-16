// https://school.programmers.co.kr/learn/courses/30/lessons/181899

// 두번째 풀이
// Array.from ? new Array 사용?
// map 이 더 명시적이니까..?
function solution2(start_num: number, end_num: number): number[] {
  // return Array.from({ length: start_num - end_num + 1 }, (_, i) => start_num - i);
  return new Array(start_num - end_num + 1).fill(0).map((_, i) => start_num - i);
}

// 첫번째 풀이
function solution(start_num: number, end_num: number): number[] {
  let answer = [];

  for(let i = start_num; i >= end_num; i--) {
    answer.push(i);
  }

  return answer;
}

// test
console.log(solution(10, 3)); 
console.log(solution2(10, 3)); 


// Array.from 이란?
// Array.from은 유사 배열 객체(Array-like object)나 이터러블 객체(Iterable object)를 배열로 변환하는 JavaScript 메서드

// 기본 문법 : Array.from(arrayLike, mapFunction)
// arrayLike: 배열로 변환할 유사 배열 객체 또는 이터러블 객체.
// mapFunction(선택): 배열의 각 요소에 대해 호출할 함수. map 메서드처럼 동작함.
// 반환값: 새로운 배열.

// 숫자로 채워진 배열 생성하는 법 (참고 051 문제 알파벳 만들기) : Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]