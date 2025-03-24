// https://school.programmers.co.kr/learn/courses/30/lessons/42840
{
  // 정답 카운트 함수
  function countCorrectAnswers(answers: number[], arr: number[]): number {
    const repeatedArr = Array.from(
      { length: answers.length },
      (_, i) => arr[i % arr.length]
    ); // 💡 순환 배열 만드는 법
    return answers.filter((v, i) => v === repeatedArr[i]).length;
  }

  // 가장 높은 점수를 얻은 사람을 구해주는 함수
  function getTopScorers(countArr: number[][]): number[] {
    countArr.sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return a[0] - b[0];
    });

    const maxScore = countArr[0][1];

    return countArr.filter(([_, score]) => score === maxScore).map(([i]) => i);
  }

  function solution(answers: number[]): number[] {
    const mathHater1 = [1, 2, 3, 4, 5];
    const mathHater2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const mathHater3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const countArr = [
      [1, countCorrectAnswers(answers, mathHater1)],
      [2, countCorrectAnswers(answers, mathHater2)],
      [3, countCorrectAnswers(answers, mathHater3)],
    ];

    return getTopScorers(countArr);
  }

  // test
  // console.log(solution([1, 2, 3, 4, 5]));
  console.log(solution([1, 3, 2, 4, 2]));
}
