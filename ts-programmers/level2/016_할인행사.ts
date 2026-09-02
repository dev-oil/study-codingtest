{
  // https://school.programmers.co.kr/learn/courses/30/lessons/131127
  
  // 제한: discount 최대 100,000 → O(n log n)까지 허용. 창마다 want(최대 10개) 확인이면 약 10⁶이라 통과한다.
  // 설계:
  // 창 시작 인덱스 배열을 만든다. e.g. [0, 1, 2, ...] (개수는 discount.length - (DAY - 1))
  // 각 시작 인덱스마다 discount를 10개씩 잘라서 창의 개수표 객체를 만든다. e.g. {chicken: 1, apple: 3, ...} (없는 키 읽기는 undefined라 ?? 0으로 처리한다)
  // want의 모든 품목이 개수표에서 원하는 개수 이상이면(every) 그 창은 통과다. filter로 거르고 남은 length가 답이다.
  // 엣지: discount 길이가 딱 10이면 창은 1개다.
  
  const solution = (want: readonly string[], number: readonly number[], discount: readonly string[]): number => { 
    const DAY = 10;

    const startIndex = Array.from({ length: discount.length - (DAY - 1) }, (_, i) => i);

    return startIndex.filter((i) => {
      const discountDay = discount.slice(i, i + DAY);
      const discountWindowObj: Record<string, number> = {}

      for (const element of discountDay) {
        discountWindowObj[element] = (discountWindowObj[element] ?? 0) + 1; // 첫 키에서는 undefined (처음 나올 때 키가 아직 없다)
      }

      return want.every(((item, wantIdx) => (discountWindowObj[item] ?? 0) >= number[wantIdx]))
    }).length;
  }

  // test
  console.log(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"])); // 3
  console.log(solution(["apple"], [10], ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"])); // 0

}