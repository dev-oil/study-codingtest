// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function solution(arr: number[], query: number[]): number[] {
    query.map((v, i) => {
        if (i % 2 === 0) {
            arr = arr.slice(0, v + 1);
        } else {
            arr = arr.slice(v);
        }
    })
    
    return arr;
}

// test
console.log(solution([0, 1, 2, 3, 4, 5], 	[4, 1, 2])); // [1, 2, 3]
