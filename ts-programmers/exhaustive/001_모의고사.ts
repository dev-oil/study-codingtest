// https://school.programmers.co.kr/learn/courses/30/lessons/42840
{
  // 정답 카운트 함수
  function* cycle<T>(pattern: Iterable<T>): IterableIterator<T> {
    while (true) {
      for (const answer of pattern) {
        yield answer;
      }
    }
  }

  function countCorrectAnswers(answers: number[], pattern: number[]): number {
    const gen = cycle(pattern);
    let count = 0;

    for (let i = 0; i < answers.length; i++) {
      const guess = gen.next().value; // 하나씩 꺼냄
      if (answers[i] === guess) {
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

  // 패턴
  // 패턴별 점수
  // 최고득점자
  function solution(answers: number[]): number[] {
    const patterns = [
      [1, 2, 3, 4, 5],
      [2, 1, 2, 3, 2, 4, 2, 5],
      [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    const scores = patterns.map((pattern) =>
      countCorrectAnswers(answers, pattern)
    );

    return getTopScorers([...scores.entries()]);
  }

  // test
  console.log(solution([1, 2, 3, 4, 5]));
  console.log(solution([1, 3, 2, 4, 2]));
}

// cycle([1,2,3]) == 1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,...
