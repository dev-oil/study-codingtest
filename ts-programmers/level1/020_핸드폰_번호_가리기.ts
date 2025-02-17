// https://school.programmers.co.kr/learn/courses/30/lessons/12948

// 💡 repeat() 문자열 반복 함수를 이용한 풀이
function solution3(phone_number: string): string {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 정규표현식 풀이
function solution2(phone_number: string): string {
  return phone_number.replace(/\d(?=\d{4})/g, "*"); // 바로 뒤에 \d{4}(즉, 숫자 4개)가 있는 경우에만 현재 \d(숫자 한개)를 선택
}

// 첫번째 풀이
function solution(phone_number: string): string {
  const backNumber: string = phone_number.slice(-4);
  return [...phone_number.slice(0, -4)].map((v) => v = '*').join('').concat(backNumber);
}

// test
console.log(solution("01033334444"));
console.log(solution2("01033334444"));
console.log(solution3("01033334444"));
