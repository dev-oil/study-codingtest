// https://school.programmers.co.kr/learn/courses/30/lessons/77884

// 함수 분리해서 작업
function divider(num: number): number {
    let count: number = 0;
        
    for (let i = 1; i <= num; i++) { // 1부터 num까지 전체 탐색
        if (num % i === 0) count++;
    }

    return count;
}

function solution2(left: number, right: number): number {
    let answer: number = 0;

    for (let i = left; i <= right; i++) {
        answer += divider(i) % 2 === 0 ? i : -i;
    }

    return answer;
}

// 첫번째 풀이
function solution(left: number, right: number): number {
    let answer: number = 0;

    for (let i = left; i <= right; i++) {
        let count: number = 0;
        
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        answer += count % 2 === 0 ? i : -i;
    }

    return answer;
}

// test
console.log(solution(13, 17)); // 43
console.log(solution2(13, 17)); // 43