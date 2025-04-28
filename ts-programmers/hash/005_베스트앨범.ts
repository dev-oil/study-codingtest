// https://school.programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

// 두번째 풀이 - Map으로 한번에 데이터 관리하기
function solution2(genres: string[], plays: number[]): number[] {
  const genreMap = new Map<
    string,
    { total: number; songs: { index: number; play: number }[] }
  >();

  // 1. Map을 사용해 장르별로 노래 정보모으기
  genres.forEach((genre, index) => {
    const play = plays[index];
    if (!genreMap.has(genre)) {
      genreMap.set(genre, { total: 0, songs: [] });
    }
    const genreData = genreMap.get(genre)!;
    genreData.total += play;
    genreData.songs.push({ index, play });
  });

  // 2. 장르별로 노래를 재생 수와 인덱스 기준으로 정렬
  const sortedGenres = [...genreMap.entries()].sort(
    (a, b) => b[1].total - a[1].total
  ); // 장르별 총 재생 수로 정렬

  // 3. 결과 배열 만들기
  return sortedGenres.flatMap(([_, genreData]) =>
    genreData.songs
      .slice()
      .sort((a, b) => b.play - a.play || a.index - b.index)
      .slice(0, 2)
      .map((song) => song.index)
  );
}

// 첫번째 풀이
function solution(genres: string[], plays: number[]): number[] {
  const answer: number[] = [];
  const genresMap: Map<string, number> = new Map();
  const pairedArr: [string, number][] = genres.map((v, i) => [v, plays[i]]); // 짝꿍들을 일단 만들어줬음
  const sortedArr: [string, number][] = [...pairedArr].sort(
    ([_, a], [__, b]) => b - a
  ); // 그 중에 재생 많은 순서로 .. // sort 참조값이슈를 생각못해서 ...로 수정함

  // 해시 만들기
  for (const [genre, playCount] of pairedArr) {
    genresMap.set(genre, (genresMap.get(genre) ?? 0) + playCount);
  }

  // 해시 중에서 또 재생 순서대로~ 정렬해서 1순위 장르 뽑기
  const sortedMap = new Map(
    [...genresMap.entries()].sort(([_, a], [__, b]) => b - a)
  );

  // 이게 이제 sortedArr의 값과 key를 비교해서 pairedArr의 인덱스를 넣는 작업
  for (const key of sortedMap.keys()) {
    const twoSongs = sortedArr.filter(([genre]) => genre === key).slice(0, 2);

    for (const song of twoSongs) {
      answer.push(pairedArr.indexOf(song));
    }
  }

  return answer;
}

// test
console.log(
  solution2(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
);
