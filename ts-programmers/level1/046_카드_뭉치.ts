// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1: string[], cards2: string[], goal: string[]): string {
  for (const card of goal) {
    if (card === cards1[0]) {
      cards1.shift();
    } else if (card === cards2[0]) {
      cards2.shift();
    } else {
      return 'No';
    }
  }

  return 'Yes';
}

// test
console.log(
  solution(
    ['i', 'drink', 'water'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
);

console.log(
  solution(
    ['i', 'water', 'drink'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
);
