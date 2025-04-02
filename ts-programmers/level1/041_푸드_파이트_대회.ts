// https://school.programmers.co.kr/learn/courses/30/lessons/134240

// 두번째 풀이
function solution2(food: number[]): string {
  let answer = '';

  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }

  return answer + '0' + [...answer].reverse().join('');
}

// 첫번째 풀이
// Map 최근에 썼다고 Map 만 생각함.. 복잡도만 늘고 이점은 없었다...
function solution(food: number[]): string {
  const foodMap = new Map<number, number>();
  let answer = '';

  // 불필요한 물 제거
  food = food.slice(1);

  // foodMap 채우기
  food.forEach((v, i) => foodMap.set(i + 1, v));

  for (const v of foodMap.keys()) {
    answer += String(v).repeat(Math.floor((foodMap.get(v) ?? 0) / 2));
  }

  return answer + '0' + [...answer].reverse().join('');
}

// test
console.log(solution([1, 3, 4, 6]));
