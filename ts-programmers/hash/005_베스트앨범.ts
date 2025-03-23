// https://school.programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

function solution(genres: string[], plays: number[]): number[] {
  const answer: number[] = [];
  const genresMap: Map<string, number> = new Map();
  const pairedArr: [string, number][] = genres.map((v, i) => [v, plays[i]]); // 짝꿍들을 일단 만들어줬음
  const sortedArr: [string, number][] = [...pairedArr].sort(
    (a, b) => b[1] - a[1]
  ); // 그 중에 재생 많은 순서로 .. // sort 참조값이슈를 생각못해서 ...로 수정함

  // 해시 만들기
  for (const [genre, playCount] of pairedArr) {
    genresMap.set(genre, (genresMap.get(genre) || 0) + playCount);
  }

  // 해시 중에서 또 재생 순서대로~ 정렬해서 1순위 장르 뽑기
  const sortedMap = new Map(
    [...genresMap.entries()].sort((a, b) => b[1] - a[1])
  );

  // 이게 이제 sortedArr의 값과 key를 비교해서 pairedArr의 인덱스를 넣는 작업
  for (const key of sortedMap.keys()) {
    let count = 0;
    for (let i = 0; i < sortedArr.length; i++) {
      if (count === 2) break;
      if (sortedArr[i][0] === key) {
        answer.push(pairedArr.indexOf(sortedArr[i]));
        count++;
      }
    }
  }

  return answer;
}

// test
console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
);
