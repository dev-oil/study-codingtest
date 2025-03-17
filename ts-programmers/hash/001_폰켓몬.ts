// https://school.programmers.co.kr/learn/courses/30/lessons/1845

// 해시맵을 이용해서 풀어보자
function solution2(nums: number[]): number {
  const max: number = nums.length / 2;
  const pokemonMap: Record<number, boolean> = {}; // 해시맵(객체) 사용하기

  for (const num of nums) {
    pokemonMap[num] = true;
  }

  const uniqueCount = Object.keys(pokemonMap).length; // 해시맵의 키 개수 = 고유 폰켓몬 종류 수

  return Math.min(uniqueCount, max);
}

// 첫번째 풀이 (Set도 내부적으로는 해시 구조를 이용하긴 함 ㅎ.ㅎ)
function solution(nums: number[]): number {
  const max: number = nums.length / 2;
  const arr: number[] = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

// test
console.log(solution([3, 1, 2, 3])); // 2
console.log(solution2([3, 1, 2, 3]));
