// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s: string): string {
  return s.split(' ').map((v) => {
    return [...v].map((c, i) => {
      return i === 0 ? c.toUpperCase() : c.toLowerCase();
    }).join('');
  }).join(' ');
}

// test
console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"