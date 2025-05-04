/**
해시(hash)는 자료를 입력할 때부터 검색하기 쉬운 위치에 입력하는 방법이다.
따라서 해시는 검색을 빠르게 하는 방법이라기보다는 빠른 검색을 위한 자료관리 기법이라고 할 수 있다.

대표적으로 주소록을 예로 들어보면,
가 나 다 라 순으로 페이지를 분류하고, 이름을 첫 글자 자음을 기준으로 이름을 저장하는 방식이다.

이와 같이 이름 저장 시 성별로 구분하여
저장하면 나중에 이름을 찾을 때 매우 쉽게 찾을 수 있다.

이러한 해싱방식의 데이터를 저장하는
저장소를 해시테이블이라고 하며, 해시테이블은 여러 개의 버킷으로 나누어진다. 주소록의 ㄱ, ㄴ, ㄷ, ㄹ 과 같은 페이지가 각 버킷이 된다. 그리고, 버킷 내부에 저장되는 실제 데이터를 슬롯이라고 하는데, 주소록에서
각 이름에 해당된다.

해싱의 기본 동작은 새 데이터가 새로 입력되면, 가장 먼저 어떤 버킷에 넣을 것인지 결정해야 하는데 이 연산을 하는 기능이 해시알고리즘이다. 특정 데이터를 검색시에도 해시알고리즘 기능을 사용하면 어떤 버킷에서 찾을 것인지 결정되기 때문에 빠르게
검색할 수 있다.


문제 1. (60점)
위의 해싱 원리에 의거하여 다음과 같은 조건에 맞는 알고리즘을 작성하라.

0보다 큰 정수값을 사용자로부터 입력 받아서 해시테이블에 저장한다. 단, 해시테이블 생성 시 버킷 수는 10개 슬롯 수는 1개로 지정한다. 해시테이블에서 값이 0이면 빈 데이터 공간을 의미한다.

5개의 각 정수를 입력 시 각각의 입력값은 입력할 버킷을 찾는 해시 함수에 의해 버킷을 찾아 해시테이블에 저장한다. 5개의 정수 입력이 끝났으면, 검색할 키를 입력 받아 검색 결과를 출력한다. 검색 시에도 해시함수를 이용하여 해시테이블을 검색한다.

각 기능은 함수로 모듈화 하여 구현한다.

해시함수
이름은 Hash,  값 입력 함수
이름은 InsertValue, 값 검색 함수 이름은 FindValue로
정한다.

! 입력
입력할 키값을 프로그램 입력 받는다.

! 입력
키값은 양의 정수로만 입력 받는다.

입력값 : 11, 22, 54, 396, 87

! 출력
입력한 키값에 따른 검색 결과를 프로그램 콘솔 터미널에 출력한다.
사용자가 입력한 키값이 검색되었을 경우 : “검색되었습니다.”
사용자가 입력한 키값이 검색되지 않았을 경우 : “검색되지 않았습니다.”
 */

// 해시 로직 구현 (배열로) - 오픈 어드레싱 방식 (슬롯당 하나만 저장, 충돌시 다음 칸 탐색)
const TABLE_SIZE = 10;
const table: (number | null)[] = new Array(TABLE_SIZE).fill(null);

// 해시 함수
function hash(key: number): number {
  return key % TABLE_SIZE;
}

// 삽입 함수 (충돌 시 선형 탐사)
function insertValue(key: number): void {
  let index = hash(key);
  const start = index;

  while (table[index] !== null) {
    index = (index + 1) % TABLE_SIZE;
    if (index === start) {
      console.log(`저장 공간이 가득 찼습니다. 키 ${key}는 삽입할 수 없습니다.`);
      return;
    }
  }

  table[index] = key;
}

// 검색 함수 (선형 탐사로 찾기)
function findValue(key: number): boolean {
  let index = hash(key);
  const start = index;

  while (table[index] !== null) {
    if (table[index] === key) return true;
    index = (index + 1) % TABLE_SIZE;
    if (index === start) break; // 무한 루프 방지
  }

  return false;
}

// 입력값 5개
const inputKeys = [11, 22, 54, 396, 87];
inputKeys.forEach((key) => insertValue(key));

// 검색 테스트
const searchKey = 22;
console.log(findValue(searchKey) ? '검색되었습니다.' : '검색되지 않았습니다.');
