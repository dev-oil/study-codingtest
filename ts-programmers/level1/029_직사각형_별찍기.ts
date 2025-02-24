// https://school.programmers.co.kr/learn/courses/30/lessons/12969

// 💡 repeat 생각을 왜, . . , 못했을까 . .
const star2 = (n: number, m: number) => {
  return ('*'.repeat(n) + '\n').repeat(m);
};

// 첫번째 풀이
const star = (n: number, m: number) => {
  let answer = '';
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      answer += '*';
    }
    answer += '\n';
  }
  return answer;
};

// test
// console.log(star(5, 3));
console.log(star2(5, 3));
