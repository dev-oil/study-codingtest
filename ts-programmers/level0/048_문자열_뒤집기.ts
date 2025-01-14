// https://school.programmers.co.kr/learn/courses/30/lessons/181905

function solution(my_string: string, s: number, e: number): string {
  const prefix = my_string.slice(0, s); 
  const suffix = my_string.slice(e + 1);
  let middle = my_string.slice(s, e + 1); 

  middle = middle.split('').reverse().join('');
  
  return prefix + middle + suffix;
}

// test
console.log(solution("Progra21Sremm3", 6, 12)); // ProgrammerS123
