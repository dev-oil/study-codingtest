// https://school.programmers.co.kr/learn/courses/30/lessons/181866

function solution(myString: string): string[] {
  return myString.split('x').filter(Boolean).sort();
}

// test
console.log(solution("axbxcxdx")) // [ 'a', 'b', 'c', 'd' ]

// 💡 빈 값 필터하기
// filter(v => v.length > 0) -> filter(Boolean)