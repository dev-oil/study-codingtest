{
  // https://school.programmers.co.kr/learn/courses/30/lessons/76502

  // 제한: s 길이 1 ~ 1,000 → O(n²) OK
  // 설계 :
  // 1. count 변수를 만든다.
  // 2. 괄호 배열을 만든다. circleArray = [...s] (for 문 바깥에서)
  // 3. s.length 만큼 for 문을 만든다 (x=0 상태 포함).
  // 4. for 문 내) 멀쩡한 괄호인지 확인하기 위한 배열(스택)을 만든다. stack = []
  // 5. for 문을 한번 더 내부에서 돌리면서 괄호를 판별하는 로직을 진행한다. 여는 괄호는 stack에 push, 닫는 괄호가 들어오면 stack 마지막이 같은 종류의 여는 괄호일 때만 pop, 아니면 이 회전은 실패. (뎁스마다 새 Array 만들 필요 없음 — 마지막 요소 비교가 중첩을 알아서 처리함)
  // 6. 끝까지 실패 없고 stack이 비어 있으면 count++;
  // 7. circleArray.push(circleArray.shift()); 로 circleArray를 업데이트 해준다.
  // 8. 계속 반복 후 최종 count 값을 반환함!

  const pair: Record<string, string> = { ']': '[' , ')' : '(', '}' : '{' };

  const solution = (s: string): number => {
    let count: number = 0;
    const circleArray = [...s];

    for (let index = 0; index < s.length; index++) {
      const stack: string[] = [];
      
      for (const element of circleArray) {
        if (['[', '{', '('].includes(element)) {
          stack.push(element);
        } else {
          if (stack.at(-1) === pair[element]) {
            stack.pop();
          } else {
            stack.push(element)
          }
        }
      }

      if (stack.length === 0) count++;
      circleArray.push(circleArray.shift()!);
    }

    return count;
  }

  // test
  console.log(solution("[](){}")); // 3
  console.log(solution("}]()[{")); // 2
  console.log(solution("[)(]")); // 0
  console.log(solution("}}}")); // 0
}