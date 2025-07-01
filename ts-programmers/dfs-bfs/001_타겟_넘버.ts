// https://school.programmers.co.kr/learn/courses/30/lessons/43165
{
  function solution(numbers: number[], target: number): number {
    const dfs = (index: number, current: number): number => {
      if (index === numbers.length) {
        return current === target ? 1 : 0;
      }

      return (
        dfs(index + 1, current + numbers[index]) +
        dfs(index + 1, current - numbers[index])
      );
    };

    return dfs(0, 0);
  }

  // test
  console.log(solution([1, 1, 1, 1, 1], 3));
}
