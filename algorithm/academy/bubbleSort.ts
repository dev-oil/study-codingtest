/**
[버블정렬]
문제 2.새 학년의 시작이 되어 영통초등학교 3학년 2반 선생님은 새로운
교실, 새로운 아이들을 맞이하게 되었다. 늘 새 학년의 시작에
하는 것은 학생들에게 번호를 부여하는 것이다.

그런데, 번호를 부여하는 기준은 보통 학생의 키 순서인데, 주로 작은 키부터
큰 키로 오름차순으로 번호가 부여된다.

일단 선생님은 학생들을 모두 앞으로 나오게 하여 무작위로 일렬로 세웠다. 키가 들쑥날쑥하여 일정하지 않다. 이제 선생님은 이 학생들의 키를 재고 키 순서대로인 오름차순으로 번호를 부여하려 한다.

프로젝트를 생성하여 다음의 과정을 거쳐서 키 순서대로 만드는 알고리즘을 작성해보자.

입력한 키 데이터들이 교환이 수행될 때마다 현재의 키 데이터의 순서를 출력한다.

! 입력
입력할 키 데이터를 배열로 입력받음.

! 출력
입력한 키 데이터에 따른 정렬 결과를 프로그램 콘솔에 출력한다.
입력한 키 데이터들이 교환이 수행될 때마다 현재의 키 데이터의 순서를 출력한다.
 */

function printBubbleSortSteps(arr: number[]): void {
  const copy = [...arr];

  for (let i = 0; i < copy.length - 1; i++) {
    for (let j = 0; j < copy.length - 1 - i; j++) {
      if (copy[j] > copy[j + 1]) {
        [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
        console.log(copy.join(' '));
      }
    }
  }

  console.log('최종 정렬 결과:', copy.join(' '));
}

printBubbleSortSteps([143, 134, 137, 132, 140, 134]);

// 재귀로 업데이트 해보기
function recursiveBubbleSort(arr: number[], n = arr.length): void {
  // 기저 조건: 하나 이하의 원소만 남았다면 종료
  if (n <= 1) return;

  // 한 번의 패스를 돌며 가장 큰 값을 끝으로 보냄
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      console.log(arr.join(' '));
    }
  }

  // 나머지 앞부분에 대해 재귀 호출
  recursiveBubbleSort(arr, n - 1);
}

function printRecursiveBubbleSortSteps(input: number[]): void {
  const arr = [...input]; // 원본 보호
  recursiveBubbleSort(arr);
  console.log('최종 정렬 결과:', arr.join(' '));
}

printRecursiveBubbleSortSteps([143, 134, 137, 132, 140, 134]);
