// https://school.programmers.co.kr/learn/courses/30/lessons/42840
{
  // 정답 카운트 함수
  function* cycle<T>(pattern: Iterable<T>): IterableIterator<T> {
    yield* pattern;
    yield* cycle(pattern);
  }

  function* zip<T1, T2>(
    xs: Iterable<T1>,
    ys: Iterable<T2>
  ): IterableIterator<[T1, T2]> {
    const it1 = xs[Symbol.iterator]();
    const it2 = ys[Symbol.iterator]();

    while (true) {
      const x = it1.next();
      const y = it2.next();
      if (x.done || y.done) return;
      yield [x.value, y.value];
    }
  }

  function countCorrectAnswers(
    answers: number[],
    myAnswers: Iterable<number>
  ): number {
    let count = 0;

    for (const [a, b] of zip(answers, myAnswers)) {
      if (a === b) {
        count++;
      }
    }
    return count;
  }

  // 가장 높은 점수를 얻은 사람을 구해주는 함수
  function getTopScorers(countArr: [index: number, score: number][]): number[] {
    countArr.sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return a[0] - b[0];
    });

    const maxScore = countArr[0][1];

    return countArr
      .filter(([_, score]) => score === maxScore)
      .map(([i]) => i + 1);
  }

  function solution(realAnswers: number[]): number[] {
    const patterns = [
      [1, 2, 3, 4, 5],
      [2, 1, 2, 3, 2, 4, 2, 5],
      [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    const scores = patterns
      .map(cycle)
      .map((myAnswers) => countCorrectAnswers(realAnswers, myAnswers));

    return getTopScorers([...scores.entries()]);
  }

  // 패턴
  // 패턴별 점수
  // 최고득점자

  // test
  console.log(solution([1, 2, 3, 4, 5])); // [1]
  console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
}

// cycle([1,2,3]) == 1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,...
