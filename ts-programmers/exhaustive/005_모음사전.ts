// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function* dictionaryGen(
  current: string,
  alphabet: string[]
): Generator<string> {
  if (current.length > 5) return;
  if (current.length > 0) yield current;

  for (const char of alphabet) {
    yield* dictionaryGen(current + char, alphabet);
  }
}

function solution(word: string): number {
  const alphabet = ['A', 'E', 'I', 'O', 'U'];
  let index = 0;

  for (const generated of dictionaryGen('', alphabet)) {
    index++;
    if (generated === word) return index;
  }

  return -1; // 단어 없을 경우 추가
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
