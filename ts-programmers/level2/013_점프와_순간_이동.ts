// https://school.programmers.co.kr/learn/courses/30/lessons/12980

// 💡 거꾸로 출발했을 때? 를 생각해보기
// 💡 짝수 홀수 힌트
// 이걸 그리디라고 합디다..?
function solution(distance: number): number {
  let batteryUsage: number = 0;

  while (0 < distance) {
    if (distance % 2 === 0) {
      distance /= 2;
    } else {
      distance -= 1;
      batteryUsage += 1;
    }
  }

  return batteryUsage;
}

console.log(solution(5));
