/**
프린터를 통해 프린팅을 하려고 한다. 프린터의 인쇄 시스템은 스풀러가 사용하는 큐를 시뮬레이션 하는 프로그램을 작성하라.

문제 설명
프린터의 인쇄 속도는 일반적으로 느리기 때문에 문서를 보내는 즉시 인쇄하지 못한다. 그래서 인쇄할 문서 목록을 저장해놓고 하나씩 순서대로 꺼내 인쇄해야 하는데, 이 때 큐를 사용한다.
인쇄는 5초에 한 번 꼴로 새로운 문서를 입력 받는데, 문서는 2-10페이지 정도의 길이를 갖는다. 문서의 페이지는 2-10 사이의 랜덤값을 갖는다.
그리고 인쇄는 초당 1페이지씩 인쇄하도록 한다.
이러한 경우 인쇄하는 속도보다 문서가 쌓이는 속도가 더 빠르도록 되어 있다.

인쇄하는 중에라도 새로운 문서의 인쇄를 언제든지 시작할 수 있으며 대기중인 문서의 목록을 큐에 쌓아 두고 도착한 순서대로 문서를 꺼내서 인쇄하도록 작성한다.

큐의 각 기능에 대해서 함수(메소드)화 시키고, 각 함수의 이름은 다음과 같이 작성한다.

l  큐 메모리
초기화 함수 :    void  initQueue(int size)
l  프린터
페이지 추가 함수 :  boolean  insert(int data)
l  현재
대기 문서 출력 함수 : void  printQueue()
l  프린터
페이지 삭제 함수 :  int  delete()

입력
-      
새로운 문서 페이지 n의 입력 범위 (2≤n≤10) 에서 랜덤하게 발생

출력
-      
출력 결과를 콘솔 터미널에 출력한다.
-      
랜덤하게 입력 받은 새로운 문서 페이지의 삽입 여부 출력
-      
문서 페이지 n의 인쇄가 진행됨에 따라 1씩 감소시켜 현재 몇페이지 인쇄중인지 출력
-      
현재 대기중인 문서 수는 몇 개인지 출력.

 */

class PrinterQueue {
  private queue: number[] = [];
  private maxSize: number;
  private currentJob: number | null = null;

  constructor(size: number) {
    this.maxSize = size;
  }

  // 문서 삽입
  insert(pages: number): boolean {
    if (this.queue.length < this.maxSize) {
      this.queue.push(pages);
      console.log(`${pages}페이지 문서가 큐에 추가되었습니다.`);
      return true;
    } else {
      console.log('큐가 가득 찼습니다. 문서를 추가할 수 없습니다.');
      return false;
    }
  }

  // 현재 대기중인 문서 출력
  printQueue(): void {
    console.log(`대기 문서 수: ${this.queue.length}`);
    if (this.queue.length > 0) {
      console.log(`→ 대기열: [${this.queue.join(', ')}]`);
    }
  }

  // 인쇄 진행
  delete(): void {
    if (this.currentJob === null && this.queue.length > 0) {
      this.currentJob = this.queue.shift()!;
      console.log(`새 문서 인쇄 시작: ${this.currentJob}페이지`);
    }

    if (this.currentJob !== null) {
      this.currentJob--;
      console.log(`현재 문서 인쇄 중... 남은 페이지: ${this.currentJob}`);
      if (this.currentJob === 0) {
        console.log('문서 인쇄 완료!');
        this.currentJob = null;
      }
    }
  }
}

// test
const queue = new PrinterQueue(10);

// 5초마다 새 문서 삽입
setInterval(() => {
  const pages = Math.floor(Math.random() * 9) + 2; // 2~10
  queue.insert(pages);
  queue.printQueue();
}, 5000);

// 1초마다 인쇄 진행
setInterval(() => {
  queue.delete();
}, 1000);
