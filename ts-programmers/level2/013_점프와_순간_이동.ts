// https://school.programmers.co.kr/learn/courses/30/lessons/12980

// 💡 거꾸로 출발했을 때? 를 생각해보기
// 💡 짝수 홀수 힌트
// 이걸 그리디라고 합디다..?

function solution(distance: number): number {
  if (distance === 0) return 0;

  if (distance % 2 === 0) {
    return solution((distance /= 2));
  } else {
    return 1 + solution((distance -= 1));
  }
}

console.log(solution(5)); // 2
