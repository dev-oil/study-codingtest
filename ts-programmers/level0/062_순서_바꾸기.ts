// https://school.programmers.co.kr/learn/courses/30/lessons/181891

function solution(num_list: number[], n: number): number [] {
    return [...num_list.slice(n),...num_list.slice(0, n)]
}