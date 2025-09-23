// https://school.programmers.co.kr/learn/courses/30/lessons/161989

{
  type Wall = {
    index: number,
    colored: boolean
  }

  // 1. 상태관리 스타일로 풀이
  const solution = (wallLength: number, roller: number, section: number[]): number => {
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
  // console.log(solution(8, 4, [2, 3, 6])); // 2
  // console.log(solution(5, 4, [1, 3])); // 1
  // console.log(solution(4, 1, [1, 2, 3, 4])); // 4

  // 2. section 배열로만
  const solution2 = (wallLength: number, roller: number, section: number[]): number => {
    let count = 0;
    let paintedEnd = 0;

    for (const s of section) {
      if (s <= paintedEnd) continue; // 만약 현재 섹션 구역이 칠해진 끝구역 보다 작다면 (아직 칠해진 부분이라면) 스킵하고
      paintedEnd = s + roller - 1; // 그게 아니라면 새 롤러 써
      count++;
    }
    return count;
  }

  // test
  console.log(solution2(8, 4, [2, 3, 6])); // 2
  console.log(solution2(5, 4, [1, 3])); // 1
  console.log(solution2(4, 1, [1, 2, 3, 4])); // 4

  // 3. 동작은 같은데 조금 더 직관적으로
  const solution3 = (wallLength: number, roller: number, section: number[]): number => {
    let count = 0;
    let paintedEnd = 0;

    for (const s of section) {
      if (s > paintedEnd) { // 만약 끝까지 칠해진 부분의 끝보다 현재 구역의 위치가 더 나와있다면 (칠해진 부분 바깥이라면) 새 롤러 써
        count++;
        paintedEnd = s + roller - 1;
      }
    }
    return count;
  }
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

// 두번째 풀이 
// section으로만 풀어보려고 했음
// section을 돌면서, 새로 paint 끝 갱신 및 카운트하는 방식으로. 만약 다음 반복턴에 s 가 갱신된 paint 끝보다 작으면 카운트 스킵이죵?

