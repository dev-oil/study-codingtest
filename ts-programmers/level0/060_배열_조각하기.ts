// https://school.programmers.co.kr/learn/courses/30/lessons/181893

// 💡 코드의 자유도
function solution(arr: number[], query: number[]): number[] {
    query.forEach((v, i) => {

        // arr = i % 2 === 0 ? arr.slice(0, v + 1) : arr.slice(v);
        arr = arr.slice(...(i % 2 === 0 ? [0, v + 1] : [v])); // 여기서 유추할 수 있는 사항 : arr 에 값이 들어가겠군! 을 바로 유추할 수 있음
    // -------------------------

        // 이 경우에는 계속 확인을 하여야 함. . .
        // if (i % 2 === 0) {
        //     // -------------------------
        //     // -------------------------
        //     // -------------------------
        //     // -------------------------
        //     arr = arr.slice(0, v + 1);
        //     // -------------------------
        //     // -------------------------
        // } else {
        //     arr = arr.slice(v);
        // }
    })

    return arr;
}

// test
console.log(solution([0, 1, 2, 3, 4, 5], 	[4, 1, 2])); // [1, 2, 3]
