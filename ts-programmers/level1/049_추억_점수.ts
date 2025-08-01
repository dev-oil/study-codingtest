// https://school.programmers.co.kr/learn/courses/30/lessons/176963

import _ from 'lodash'

{
  // 1. lodash 풀이
  // - 1. 일단 튜플로 이름 - 값 쌍을 만들고, 해당 쌍을 Map으로 만들어준다.
  // - 2. photos 배열을 돌려서 이름에 해당하는 값을 Map에서 뽑아내고, 그 값을 합산해서 리턴하면 끝.
  const solution = (name: string[], yearning: number[], photo: string[][]): number[] => {
    const peopleScore = _.zip(name, yearning); // const peopleScore: [string, number][] = _.zip(name, yearning) as [string, number][];
    const peopleMap = new Map([...peopleScore]);

    return photo.map((photos) => _.sum(photos.map((people) => peopleMap.get(people)).filter((score) => typeof score === 'number')));
  }

  // test
  // console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])); // [19, 15, 6]
  // console.log(solution(["kali", "mari", "don"], [11, 1, 55], [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]])); // [67, 0, 55]
  // console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may"],["kein", "deny", "may"], ["kon", "coni"]])); // [5, 15, 0]


  // 2. 기본 TS 풀이 (코테용)
  const solution2 = (name: string[], yearning: number[], photo: string[][]): number[] => {
    const peopleScore: [string, number][] = name.map((v, i) => [v, yearning[i]]);
    const peopleMap = new Map([...peopleScore]);

    return photo.map((photos) => photos.map((people) => peopleMap.get(people)).filter((score) => typeof score === 'number').reduce((sum, val) => sum + val, 0));
  }

  // test
  console.log(solution2(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])); // [19, 15, 6]
  console.log(solution2(["kali", "mari", "don"], [11, 1, 55], [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]])); // [67, 0, 55]
  console.log(solution2(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may"],["kein", "deny", "may"], ["kon", "coni"]])); // [5, 15, 0]

}