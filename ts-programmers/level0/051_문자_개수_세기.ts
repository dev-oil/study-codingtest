// https://school.programmers.co.kr/learn/courses/30/lessons/181902

// 💡 시간 복잡도
// 시간 복잡도를 간단히 계산하는 법 : for 문이 얼마나 돌아가는지 확인해보자!
// 시간 복잡도는 극단적으로 계산 해야함 > 사실상 첫번째 풀이와 두번째 풀이의 시간 복잡도는 같음

// 세번째 풀이
function solution3(my_string: string): number[] {
  let answer = new Array(52).fill(0);
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const alphabetMap = new Map(); // 💡 Map 은 내부적으로 해시 테이블을 사용해서 함수가 키를 특정 위치(버킷)에 매핑해주기 때문에, 데이터를 찾는 데 걸리는 시간이 거의 일정하기 때문에 시간 복잡도 상 좋다

  // 알파벳과 인덱스를 맵핑
  for (let i = 0; i < alphabet.length; i++) {
    alphabetMap.set(alphabet[i], i);
  }
  
  // my_string을 순회하면서 Map을 이용해 카운팅
  for (let i = 0; i < my_string.length; i++) {
    const index = alphabetMap.get(my_string[i]);
    answer[index]++;
  }

  return answer;
}

// 두번째 풀이
function solution2(my_string: string): number[] {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let answer = new Array(52).fill(0);

  // new Map()
  for (let i = 0; i < my_string.length; i++) {
    answer[alphabet.indexOf(my_string[i])]++;
  }
  // 52 * n
  return answer;
}

// Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit

// a b c d .... A B

// 첫번째 풀이 (너무 복잡하게 생각한듯..ㅋㅋ)
function solution(my_string: string): number[] {
  const lowerCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
  const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  const alphabet = upperCase.concat(lowerCase);

  let answer: number[] = new Array(alphabet.length).fill(0);
  alphabet.forEach((v, i) => { // 52
    my_string.split('').forEach((sv) => { // n
      if(v === sv) {
        answer[i] += 1;
      }
    })
  })
  // 52 * n
  
  return answer;
}

// 알파벳 소문자 & 대문자 배열 만드는 법 in JS
// const lowerCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
// const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));


// test
// console.log(solution("Programmers"));
// console.log(solution2("Programmers"));
console.log(solution3("Programmers"));
