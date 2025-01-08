// https://school.programmers.co.kr/learn/courses/30/lessons/181900

function solution(my_string: string, indices: number[]) {
  return my_string.split('').filter((_, i) => !indices.includes(i)).join('');
}

// test
console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])) // programmers