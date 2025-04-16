// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function dictionary(
  current: string,
  alphabet: string[],
  result: string[]
): void {
  if (current.length > 5) return;
  if (current.length > 0) result.push(current);

  for (const char of alphabet) {
    dictionary(current + char, alphabet, result);
  }
}

function solution(word: string): number {
  const alphabet: string[] = ['A', 'E', 'I', 'O', 'U'];
  const result: string[] = [];

  dictionary('', alphabet, result);

  return result.indexOf(word) + 1;
}

// ├── A (1)
// │   ├── AA (2)
// │   │   ├── AAA (3)
// │   │   │   ├── AAAA (4)
// │   │   │   │   ├── AAAAA (5)
// │   │   │   │   ├── AAAAE (6)
// │   │   │   │   ├── AAAAI (7)
// │   │   │   │   ├── AAAAO (8)
// │   │   │   │   └── AAAAU (9)
// │   │   │   ├── AAAE (10)
// │   │   │   ├── AAAI (…)
// │   │   │   ├── AAAO
// │   │   │   └── AAAU

// test
console.log(solution('AAAAE')); // 6
