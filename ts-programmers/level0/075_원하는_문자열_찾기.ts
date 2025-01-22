// https://school.programmers.co.kr/learn/courses/30/lessons/181878

// 두번째 풀이
function solution2(myString: string, pat: string): number {
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}

// 첫번째 풀이 
// 안좋은점 for문이 최대로 돌아야함 (내용이.. 없을경우)
function solution(myString: string, pat: string): number {
  myString = myString.toLowerCase();
  pat = pat.toLowerCase();

  for (let i = 0; i < myString.length; i++) {
    if (myString.slice(i, pat.length + i) == pat) {
      return 1
    }
  }

  return 0;
}

// test
console.log(solution("AbCdEfG", "aBc")); // 1
console.log(solution("aaAA", "aaaaa")); // 0

console.log(solution2("AbCdEfG", "aBc")); // 1
console.log(solution2("aaAA", "aaaaa")); // 0