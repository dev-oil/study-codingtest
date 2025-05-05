/**
자동차 블랙박스 관리 소프트웨어의 미니 시뮬레이터를 작성하시오

문제 설명

메인
프로그램은 menu driven 방식을 사용한다.

메인
메뉴는 다음의 4가지로 한다.

1) 녹화 ON/OFF  [[ 현재상태 : OFF ]]
2) 잔여 녹화 시간 확인
3) 녹화 시간 설정 
4) 프로그램 종료

메인
메뉴의 세부기능은 다음과 같다.

1) 녹화 ON/OFF  [[ 현재상태 : OFF ]]
- toggle 방식을 사용 ( 1번 메뉴를 누를 때마다 ON/OFF 모드가 toggle됨 )
- 디폴트는 OFF 상태이며 메뉴 옆에 현재 상태가 표시됨
- 녹화가 ON되면 현재 카메라의 이미지 내용을 파일에 저장하는 기능을 수행하는 쓰레드를 시작시키며, 녹화시간은 디폴트 60초로 설정되도록 한다.
- 여기에서는 카메라 이미지 내용을 시뮬레이션하기 위하여 단순한 “Recording_>1”과 같은 메시지를 매 1초마다 한번씩 파일에 쓰도록 한다.
- 녹화 내용은 “data.rec” 파일에 저장한다.

2) 잔여 녹화 시간 확인
- 현재의 녹화 잔여 시간을 초 단위로 출력한다.

3) 녹화 시간 설정 
- 녹화 시간을 초 단위로 설정할 수 있다.
- 녹화 시간이 양수 값이 설정되면 녹화 상태가 ON되고 현재 카메라의 이미지 내용을 파일에 저장하는 기능을 수행하는 쓰레드를 시작시킨다.
- 여기에서는 카메라 이미지 내용을 시뮬레이션하기 위하여 단순한 “Recording_>1”과 같은 메시지를 매 1초마다 한번씩 파일에 쓰도록 한다.
- 녹화 내용은 “data.rec” 파일에 저장한다.
- 이미 녹화 기능을 수행하는 쓰레드가 실행되고 있었다면 다시 시작시킬 필요는 없다.
- 기존 녹화 데이터 파일이 존재하는 경우에는, 추가 녹화 데이터는 “data.rec” 파일 뒤에 추가하여 쓰도록 한다.

4) 프로그램 종료
- 녹화 데이터 저장 파일인 “data.rec” 파일은 메인 프로그램이 시작할 때 생성되도록 하며, 기존 동일명의 파일이 존재하는 경우에는 기존 내용에 덮어 쓰도록 한다.


O 입력
-      
각 노드의 입력값 범위를 (1≤n≤10) 까지로
정하되, 노드의 값은 중복되지 않는다.
-      
입력한 노드가 루트 노드인지, 잎노드인지 구분하여
입력한다.
-      
입력한 노드가 루트를 기준으로 왼쪽 노드인지, 오른쪽
노드인지 구분하여 입력한다.


O 출력
-      
출력 결과를 콘솔 터미널에 출력한다.
-      
전위 순회한 결과를 출력한다.
-      
중위 순회한 결과를 출력한다.
-      
후위 순회한 결과를 출력한다.
 */

import * as fs from 'fs';
import * as readline from 'readline';

let isRecording = false;
let recordingTime = 60; // 기본값
let remainingTime = 0;
let recordingInterval: NodeJS.Timeout | null = null;
const filePath = 'data.rec';

// 시작 시 파일 초기화
fs.writeFileSync(filePath, '');

function toggleRecording() {
  if (isRecording) {
    console.log('▶ 녹화를 중지합니다.');
    isRecording = false;
    if (recordingInterval) {
      clearInterval(recordingInterval);
      recordingInterval = null;
    }
  } else {
    console.log('▶ 녹화를 시작합니다.');
    isRecording = true;
    remainingTime = recordingTime;
    startRecording();
  }
}

function startRecording() {
  if (recordingInterval) clearInterval(recordingInterval);

  let count = 1;
  recordingInterval = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(recordingInterval!);
      recordingInterval = null;
      isRecording = false;
      console.log('⏹ 녹화가 종료되었습니다.');
      return;
    }

    fs.appendFileSync(filePath, `Recording_>${count}\n`);
    console.log(`💾 Recording_>${count}`);
    count++;
    remainingTime--;
  }, 1000);
}

function showRemainingTime() {
  console.log(`⏱️ 잔여 녹화 시간: ${remainingTime}초`);
}

function setRecordingTime(newTime: number) {
  if (newTime <= 0) {
    console.log('⚠️ 양수를 입력하세요.');
    return;
  }

  recordingTime = newTime;
  remainingTime = newTime;

  console.log(`⏱️ 녹화 시간이 ${newTime}초로 설정되었습니다.`);

  // 녹화 중이 아니면 바로 시작 (count 줄이기)
  if (!isRecording) {
    isRecording = true;
    startRecording(); // 바로 실행
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log(`
===== 블랙박스 메뉴 =====
1) 녹화 ON/OFF    [현재 상태: ${isRecording ? 'ON' : 'OFF'}]
2) 잔여 녹화 시간 확인
3) 녹화 시간 설정
4) 프로그램 종료
========================`);
}

function handleMenu(input: string) {
  switch (input.trim()) {
    case '1':
      toggleRecording();
      break;
    case '2':
      showRemainingTime();
      break;
    case '3':
      rl.question('설정할 녹화 시간 (초): ', (time: string) => {
        setRecordingTime(Number(time));
        promptMenu();
      });
      return;
    case '4':
      console.log('프로그램을 종료합니다.');
      rl.close();
      if (recordingInterval) {
        clearInterval(recordingInterval);
        recordingInterval = null;
      }
      return;
    default:
      console.log('⚠️ 잘못된 입력입니다.');
  }

  promptMenu();
}

function promptMenu() {
  showMenu();
  rl.question('선택 > ', handleMenu);
}

promptMenu();
