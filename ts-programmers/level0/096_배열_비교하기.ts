// https://school.programmers.co.kr/learn/courses/30/lessons/181856

import _ from 'lodash';

// lodash 적용
function solution2(arr1, arr2) {
    if (arr1.length !== arr2.length) return arr1.length > arr2.length ? 1 : -1;

    let sumArr1 = _.sum(arr1);
    let sumArr2 = _.sum(arr2);
    
    return sumArr1 === sumArr2 ? 0 : sumArr1 > sumArr2 ? 1 : -1;
}

// 첫번째 풀이
function solution(arr1, arr2) {
    if (arr1.length !== arr2.length) return arr1.length > arr2.length ? 1 : -1;

    let sumArr1 = 0;
    let sumArr2 = 0;

    arr1.forEach((v) => sumArr1 += v );
    arr2.forEach((v) => sumArr2 += v );
    
    return sumArr1 === sumArr2 ? 0 : sumArr1 > sumArr2 ? 1 : -1;
}

// test
console.log(solution([49, 13], [70, 11, 2])); // -1
console.log(solution2([49, 13], [70, 11, 2])); // -1