// https://school.programmers.co.kr/learn/courses/30/lessons/161989

{
  type Wall = {
    index: number,
    colored: boolean
  }

  const solution = (wallLength: number, roller: number, section: number[]) => {
    // 1. 벽 만들기
    const wall: Wall[] = Array.from({length: wallLength}, (_, i) => ({
      index: i + 1,
      colored: !section.includes(i + 1),
    }));

    // 2. 만든 벽 내 첫번째 false 값 구하고 및 롤러 만들기
    let count = 0;

    // 3. 해당 index기준으로 + m 해서 칠하고 그 범위 내 false 값을 true 로 바꾸기
    while (wall.some(w => w.colored === false)) {
      const firstUnColored = wall.find(w => w.colored === false);
      if (firstUnColored === undefined) break;

      const start = firstUnColored.index + roller - 1 > wallLength ? wallLength - roller + 1 : firstUnColored.index;

      const startIdx = start - 1;
      const endIdx = startIdx + roller;

      for (let i = startIdx; i < endIdx; i++) {
        wall[i].colored = true;
      }

      count++;
    }

    return count;
  }

  // test
  console.log(solution(8, 4, [2, 3, 6])); // 2
  console.log(solution(5, 4, [1, 3])); // 1
  console.log(solution(4, 1, [1, 2, 3, 4])); // 4
}

// devoil's note

// 첫번째 풀이 (시간초과)
// 1. 벽 만들기 / 2. 만든 벽 내 첫번째 false 값 구하고 및 롤러 만들기 3. 해당 index기준으로 + m 해서 칠하고 그 범위 내 false 값을 true 로 바꾸기 로직으로 생각함
// 2 생각 중 두가지 생각을 하게 됨
// 2-1. section을 이용해볼까? (그냥 기존 section이 생각해보니까 나와잇네)
  // section의 첫번째. 

  // section[i] + m
  // const roller = section.map(v => v + m - 1); // 이렇게 되면 상태관리가 안되는 것 같음 -> 이건 배열만 사용하는 버전으로 다시 만들어보기
// 2-2. 그냥 기존 wall을 이용해서 상태관리 방식으로 false 값 첫번째 인덱스 + m(롤러값) 까지 해서 전부 true로 만들고 계속 반복 및 rolling
// 일단 상태관리 방식으로 진행했고, 처음엔 시간 초과가 떴음 100,000 제한 ... ^_^


