// generator 버전 map / concat 만들기

// mapGen
function* mapGen<T, U>(arr: T[], f: (x: T) => U): IterableIterator<U> {
  for (let i = 0; i < arr.length; i++) {
    yield f(arr[i]);
  }
}

const genMap = mapGen([1, 2, 3], (x) => x + 2);
console.log([...genMap]); // [3, 4, 5]

// concatGen
// 기본 버전
function* concatGen<T, U>(arr1: T[], arr2: U[]): IterableIterator<T | U> {
  for (const item of arr1) {
    yield item;
  }

  for (const item of arr2) {
    yield item;
  }
}
const genConcat = concatGen([1, 2], ['a', 'b']);
console.log([...genConcat]); // [1, 2, 'a', 'b']

// concatGen iterator 버전
// 이것의 장점은 배열 + iterator 가 가능하다.
// yield*가 이터러블(= 배열, 제너레이터 다 포함) 을 처리할 수 있기 때문
function* concatGenIter<T, U>(
  iter1: Iterable<T>,
  iter2: Iterable<U>
): IterableIterator<T | U> {
  yield* iter1;
  yield* iter2;
}

function* genNumbers() {
  yield 100;
  yield 200;
}

const genConcatIter = concatGenIter([1, 2], genNumbers());
console.log([...genConcatIter]); // [1, 2, 100, 200]

// return 타입에 대해서
// Iterable<U> vs Generator<U> vs IterableIterator<U>
// 1. Iterable<U>
// - 포함 기능 : Symbol.iterator()
// - 설명 : for...of로 순회 가능만 하면 됨

// 2. Generator<U>
// - 포함 기능 : IterableIterator<U>의 서브타입
// - 설명 : next() / throw() / return() 전부 있음

// 3. IterableIterator<U>
// - 포함 기능 : Iterable + Iterator
// - 설명 : 제너레이터 함수의 정확한 반환 타입

// 즉시 계산 (Eager) / 게으른 계산 (Lazy)
// 즉시 계산(Eager): 보통 쓰는 기본 방식, 간단하고 빠름
// 게으른 계산(Lazy): "데이터가 많거나 일부만 쓸 때" 매우 좋음
