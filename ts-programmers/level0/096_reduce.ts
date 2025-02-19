// reduce 이해하기
const xs = [1,2,3,4,5]
const zs = []

const x = xs.reduce((x, y) => {
  zs.push(x)
  return x + y;
})

// console.log(xs);
// console.log(zs); // [ 1, 3, 6, 10 ] 이 나오는 이유는?
// 💡 헷갈렸던 부분 -> 초깃값 설정 관련
// reduce에서 초깃값을 설정해주지 않는다면 자동으로 해당 배열의 첫번째 값으로 초깃값을 설정한다.
// 그리고 배열의 두번째 값을 y로 시작하게 된다.
// 초깃값을 설정해준다면, reduce는 배열의 첫 번째 요소를 y로 사용하여 계산한다.

// 실행 1회
// x 값이 배열의 첫번째 값 1로 초기화 된다.
// x 를 zs 배열에 push 한다.
// y 값이 배열의 두번째 값 2로 초기화 된다.
// x + y -> 1 + 2 로 되어 누적값 x가 3이 된다.

// 실행 2회
// x 는 3이다.
// x 를 zs 배열에 push 한다. [1, 3]
// y 값은 배열의 3번째 값 3으로 변경된다.
// x + y -> 3 + 3 으로 되어 누적값 x가 6이 된다.

// 이하 반복입니다~~~~!

// reduce로 map / filter 구현하기
// reduce filter
function filter(xs, f) {
  return xs.reduce((acc, curr, index, arr) => {
    if (f(curr, index, arr)) {
      acc.push(curr);
    }
    return acc;
  }, [])
}

// acc를 건드리지 않고 구현하기 > 의도) 새 배열 반환
function filter2(xs, f) {
return xs.reduce((acc, curr, index, arr) => {
  return f(curr, index, arr) // f 함수 true / false에 따라서...
    ? [...acc, curr]  // 조건을 만족하면 (true 라면) 새로운 배열 반환
    : acc // 조건을 만족하지 않으면 (false 라면) 기존 배열 유지
  }, []            
);
}

// only JS
// function filterForMe(arr, callback) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// test 
const numbers = [1, 2, 3, 4, 5];
let result = filter(numbers, num => num > 2);
console.log(result); // [3, 4, 5]

result = filter2(numbers, num => num > 2);
console.log(result);


// reduce map
function map(xs, f) {
  return xs.reduce((acc, curr, index, arr) => {
    acc.push(f(curr, index, arr));
    return acc;
  }, [])
}

// acc를 건드리지 않고 구현 > 의도) 새 배열 반환
function map2(xs, f) {
  return xs.reduce((acc, curr, index, arr) => {
    return [...acc, f(curr, index, arr)]
  }, [])
}

// test
let result2 = map(numbers, (num) => num * num);
console.log(result2); // [ 1, 4, 9, 16, 25 ]

result2 = map2(numbers, (num) => num * num);
console.log(result2); // [ 1, 4, 9, 16, 25 ]

// reduce를 쓰기 좋을 때
// [1,2,3,4,5].reduce((x,y) => x + y)
// (x+y)
// ((1+2)+3)
// 1 +2 +3 +4 +5 // fold 한 계산일 경우