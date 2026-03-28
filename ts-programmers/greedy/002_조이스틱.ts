// https://school.programmers.co.kr/learn/courses/30/lessons/42860

import _ from 'lodash';

{
  // 로직을 나눈다면? 위 / 아래 조작 횟수 계산
  function countUpDownMoves(char: string): number {
    const up = char.charCodeAt(0) - 'A'.charCodeAt(0);
    const down = 'Z'.charCodeAt(0) - char.charCodeAt(0) + 1;
    return Math.min(up, down);
  }

  function countLeftRightMoves(str: string[]): number {
    let minMove = str.length - 1;
    for (let i = 0; i < str.length; i++) {
      let next = i + 1;

      while (next < str.length && str[next] === 'A') {
        next++;
      }

      const goAndBack = i + i + (str.length - next);
      const backAndGo = i + (str.length - next) * 2;

      minMove = Math.min(minMove, goAndBack, backAndGo);
    }

    return minMove;
  }

  // 좌 / 우 조작(커서 이동) 최소화 (a일 경우에 넘어가야하는?)
  function solution(name: string): number {
    return (
      _.sum([...name].map(countUpDownMoves)) + countLeftRightMoves([...name])
    );
  }

  // test
  console.log(solution('JAZ')); // 11
}
