// https://school.programmers.co.kr/learn/courses/30/lessons/181870

function solution(strArr: string[]): string[] {
  return strArr.filter((v) => v.indexOf('ad') === -1)
}

// test
console.log(solution(["and","notad","abcd"]))