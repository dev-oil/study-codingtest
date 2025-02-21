// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s: string): string {
    return [...s].sort((a, b) => a > b ? -1 : 1).join("");
}

// test
console.log(solution("Zbcdefg"));