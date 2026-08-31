{
  // https://school.programmers.co.kr/learn/courses/30/lessons/131127
  
  // 제한: discount 최대 100,000 → O(n log n)까지 허용. 창마다 want(최대 10개) 확인이면 약 10⁶이라 통과한다.
  // 설계:
  // 각 want 와 number 값을 객체로 만든다. e.g. const whatIWant: Record<string, number> = {banana: 3, apple: 2}
  // discount 배열을 0부터 9까지 / 1부터 10까지 / 2부터 11까지 ... 각 섹션을 잘라서 해당 자른 배열을 discount.length - 10값 까지 for문으로 돌면서 해당하는 whatIWant 객체 키 값이 나오면 그 키 값의 value 값에 -1 해준다. 만약 전체 value 값이 0과 같거나 0보다 작으면 answer++ 추가해준다.
  // discount.length - 10 값까지 비교 완료되면 반복문 종료하고 answer값을 return 한다.
  // 엣지: discount 길이가 딱 10이면 창은 1개다.
  
  // [ 1차 풀이 ] ==========================================
  const solution = (want: string[], number: number[], discount: string[]): number => {
    const DAY = 10;

    const whatIWant: Record<string, number> = {};
    let answer = 0;

    for (const [i, element] of want.entries()) { // 이거 idiom 찾아보기
      whatIWant[element] = number[i];
    }

    for (let i = 0; i <= discount.length - DAY; i++) {
      const copyWhatIWant = { ...whatIWant };
      const discountDay = discount.slice(i, i + DAY);

      for (const element of discountDay) {
        copyWhatIWant[element] -= 1;
      }
      
      if (Math.max(...Object.values(copyWhatIWant)) <= 0) {
        answer++;
      }
    }

    return answer;
  };

  // test
  console.log(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"])); // 3
  console.log(solution(["apple"], [10], ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"])); // 0 


}