{
  // map 함수 직접 구현하기
  const arr = [1, 2, 10, 5];

  // my map
  function mapForMe<T, U>(xs: T[], f: (x: T) => U): U[] {
    let result: U[] = [];

    for (let i = 0; i < xs.length; i++) {
      result.push(f(xs[i])); // 함수 f(x)에 배열 요소 전달
    }

    return result; // 배열 반환
  }

  // test
  // 기존거
  const xs = arr.map((x) => x % 2 === 0);
  console.log(xs);

  // my map
  const resultMap = mapForMe(arr, (x) => x % 2 === 0);
  console.info(resultMap);
}
