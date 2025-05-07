// https://school.programmers.co.kr/learn/courses/30/lessons/42883

{
  function solution(number: string, k: number): string {
    const answer: number[] = [];

    for (const char of number) {
      const num = Number(char);

      while (k > 0 && answer.length && answer.at(-1)! < num) {
        answer.pop();
        k--;
      }

      answer.push(num);
    }

    // 만약 k 가 남았을 경우 뒤에서 잘라줘야함
    if (k > 0) {
      answer.splice(-k);
    }

    return answer.join('');
  }

  // test
  console.log(solution('4177252841', 4)); // 775841
}
