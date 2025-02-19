// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n: number): number[] {
    return [...String(n)].map(Number).reverse();
}

// test
console.log(solution(12345)); // [5,4,3,2,1]
