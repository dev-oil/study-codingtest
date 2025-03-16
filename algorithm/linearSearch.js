// 순차 탐색 구현하기 (Linear Search)
// 배열의 첫 번째 요소부터 마지막 요소까지 차례대로 탐색하는 방법

function LinearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (key === arr[i]) return `찾는 값은 ${i} 번째에 있습니다.`
  }
  return `찾는 값이 없습니다.`
}

const arr = [23, 46, 34, 67, 87, 34, 27, 0, 12];
const key = 75; 

console.log(LinearSearch(arr, key));