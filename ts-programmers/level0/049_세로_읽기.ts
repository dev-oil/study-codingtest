// https://school.programmers.co.kr/learn/courses/30/lessons/181904

function solution(my_string: string, m: number, c: number): string {
  let answer = '';
  
  for (let i = 0; i < my_string.length; i += m) {
    answer += my_string[i + c - 1]
  }

  return answer;
}

// test
console.log(solution('ihrhbakrfpndopljhygc', 4, 2)); // happy
