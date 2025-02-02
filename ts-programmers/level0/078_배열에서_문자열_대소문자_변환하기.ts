// https://school.programmers.co.kr/learn/courses/30/lessons/181875

function solution(strArr: string[]): string[] {
  return strArr.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase())
}

// test
console.log(solution(["AAA","BBB","CCC","DDD"])); // [ 'aaa', 'BBB', 'ccc', 'DDD' ]
console.log(solution(["aBc","AbC"])); // [ 'abc', 'ABC' ]

