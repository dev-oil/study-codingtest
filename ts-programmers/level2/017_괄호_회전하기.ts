{
  // https://school.programmers.co.kr/learn/courses/30/lessons/76502

  // 제한: s 길이 1 ~ 1,000 → O(n²) OK (회전 n번 × 검사 n글자)
  // 설계 :
  // 1. 문자열을 스프레드로 펼쳐 배열로 만든다. [...s]
  // 2. 만들어진 배열 개수대로 filter를 돌린다 (글자는 버리고 인덱스 i만 사용).
  // 3. 문자열이 유효한 값인지 확인하는 함수 isValid를 만든다.
  // 4. 매 i마다 s.slice(i) + s.slice(0, i) 로 왼쪽 i칸 회전 문자열을 새로 만들어 isValid에 넣는다 (원본 업데이트 아님 — slice는 매번 새 문자열).
  // 5. isValid는 stack 방식을 사용한다. stack = [] 빈 배열을 만들어준다.
  // 6. 문자열의 요소 하나하나를 돌면서 여는 괄호라면(pairGroup에 키가 있으면) push 해준다.
  // 7. 닫는 괄호고 stack 끝 값이 해당 닫는 괄호의 짝(여는 괄호)이라면 stack 끝 값을 pop 한다.
  // 8. 둘 다 아니라면 그 즉시 유효하지 않으므로 false 값을 리턴한다.
  // 9. for 문 확인 이후 전체 stack에 남아 있는 값이 없다면 true, 그렇지 않다면 false. ("[[" 같은 케이스 대응)

  const pairGroup: Record<string, string> = { '[': ']' , '(' : ')', '{' : '}' };

  const isValid = (chars: string): boolean => {
    const stack: string[] = [];

    for (const element of chars) {
      if (element in pairGroup) {
        stack.push(element);
      } else if (pairGroup[stack.at(-1)!] === element) {
        stack.pop();
      } else {
        return false;
      }
    }

    return stack.length === 0;
  };

  const solution = (s: string): number =>
    [...s].filter((_, i) => isValid(s.slice(i) + s.slice(0, i))).length;

  // test
  console.log(solution("[](){}")); // 3
  console.log(solution("}]()[{")); // 2
  console.log(solution("[)(]")); // 0
  console.log(solution("}}}")); // 0
}