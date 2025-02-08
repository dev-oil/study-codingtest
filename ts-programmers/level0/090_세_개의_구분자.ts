// https://school.programmers.co.kr/learn/courses/30/lessons/181862

// 💡 split 원하는 글자 포함된 문자열 한번에 나누기 (정규식 이용)
function solution(myStr: string): string[] {
  const result = myStr.split(/[abc]/).filter(Boolean);

  return result.length === 0 ? ["EMPTY"] : result;
}

console.log(solution("baconlettucetomato")); // [ 'onlettu', 'etom', 'to' ]