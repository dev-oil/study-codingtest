// https://school.programmers.co.kr/learn/courses/30/lessons/181841

function solution(str_list: string[], ex: string): string {
    return str_list.filter((v) => !v.includes(ex)).join("");
}

// test
console.log(solution(["abc", "def", "ghi"], "ef")); // abcghi