// https://school.programmers.co.kr/learn/courses/30/lessons/181911

// 1. map + join 을 사용한 방법
function solution(my_strings: string[], parts: number[][]): string {

  return my_strings.map((str, idx) => {
    const [first, last] = parts[idx];
    return str.slice(first, last + 1)
  }).join('');

}

// 2. forEach 를 사용한 방법
function solution2(my_strings: string[], parts: number[][]): string {
  let answer = '';

  my_strings.forEach((str, idx) => {
    const [first, last] = parts[idx];
    answer += str.slice(first, last + 1);
  })

  return answer;
}

// test
console.log(solution(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]])); // programmers

console.log(solution2(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]])); // programmers


