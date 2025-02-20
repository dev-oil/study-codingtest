// https://school.programmers.co.kr/learn/courses/30/lessons/12951


function solution(s: string): string {
  return s.split(' ').map(toJadenCase).join(' ');
}

function toJadenCase(v: string): string {
  // v가 빈 문자열이 아닐것은 보장됨
  // assert(v !== "")

  // 💡 코드의 해석
  // 처음부터 순회하면서 대문자되야할놈은 대문자로, 소문자되야할놈은 소문자로 바꿔라. 그럼 그조건은 뭐냐, 0번째는 대문자 아니면 소문자
  // >> 💡 간결하게 "0번째는 대문자 아니면 소문자"로 작성해주는 것이 좋다 <<

  // return [...v].map((c, i) => i === 0 ? c.toUpperCase() : c.toLowerCase()).join('');
  return v[0].toUpperCase() + v.slice(1).toLowerCase();
} 

// test
console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"