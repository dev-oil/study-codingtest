// https://school.programmers.co.kr/learn/courses/30/lessons/181856

function solution(arr1, arr2) {
    if (arr1.length !== arr2.length) return arr1.length > arr2.length ? 1 : -1;

    let sumArr1 = 0;
    let sumArr2 = 0;

    arr1.forEach((v) => sumArr1 += v );
    arr2.forEach((v) => sumArr2 += v );
    
    return sumArr1 === sumArr2 ? 0 : sumArr1 > sumArr2 ? 1 : -1;
}

// test
console.log([49, 13], 	[70, 11, 2]); // -1


// +) lodash 풀이 추가하기