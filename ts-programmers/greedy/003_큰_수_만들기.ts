// https://school.programmers.co.kr/learn/courses/30/lessons/42883

{
  function solution(number: string, k: number): string {
    const answer: number[] = [];

    for (const char of number) {
      const num = Number(char);

      // 이름 붙이기
      // 스택의 마지막 숫자가 현재 숫자보다 작으면 제거한다 (더 큰 숫자를 앞으로 배치)
      // 제거 가능한 기회(k)가 남아있는 동안 반복한다.
      while (k > 0 && answer.length && answer.at(-1)! < num) {
        answer.pop();
        k--;
      }
    }

    // 만약 k 가 남았을 경우 뒤에서 잘라줘야함
    if (k > 0) {
      answer.splice(-k);
    }

    return answer.join('');
  }

  // test
  console.log(solution('4177252841', 4)); // 775841

  // solution2 - 함수형으로 분할해보고 assert 까지 적용해보기
  function isDescending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) return false;
    }
    return true;
  }

  function optimizeStack(stack: number[], num: number, k: number): number {
    // while 없애면 assert 터트릴 수 있음
    while (k > 0 && stack.length && stack.at(-1)! < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
    console.assert(
      isDescending(stack),
      '스택의 숫자는 항상 내림차순이어야 함당'
    );
    return k;
  }

  function solution2(number: string, k: number): string {
    const answer: number[] = [];

    for (const char of number) {
      const num = Number(char);
      k = optimizeStack(answer, num, k);
    }

    if (k > 0) {
      answer.splice(-k);
    }

    return answer.join('');
  }

  // test
  console.log(solution2('4177252841', 4)); // 775841
}
// // ok, k > 0
// [4]
// [4, 1]

// // not ok
// [7, 2, 5]
// [1,2,3]
