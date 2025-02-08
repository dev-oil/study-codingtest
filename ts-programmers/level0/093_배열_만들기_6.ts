// https://school.programmers.co.kr/learn/courses/30/lessons/181859

// 두번째 풀이
function solution2(arr: number[]): number[] {
  let stk: number[] = []

  arr.forEach((v)=>{
    if(v !== stk[stk.length - 1]){
        stk.push(v)
      }else{
        stk.splice(-1)
    }
  })
  
  return stk.length === 0 ? [-1] : stk;
}

// 첫번째 풀이
function solution(arr: number[]): number[] {
  const stk: number[] = [];
  let i: number = 0;

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else {
      if (stk[stk.length - 1] === arr[i]) {
        stk.pop();
        i++;
      } else {
        stk.push(arr[i]);
        i++;
      }
    }
  }

  return stk.length === 0 ? [-1] : stk;
}

// test
// console.log(solution([0, 1, 1, 1, 0])) // [0, 1, 0]
// console.log(solution([0, 1, 1, 0])) // [-1]

console.log(solution2([0, 1, 1, 1, 0])) // [0, 1, 0]
console.log(solution2([0, 1, 1, 0])) // [-1]
