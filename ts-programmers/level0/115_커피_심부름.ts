// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function solution(order: string[]): number {
  let total: number = 0;

  order.forEach((v) => {
    total += v.includes('latte') ? 5000 : 4500;
  });

  return total;
}

// test
console.log(
  solution(['cafelatte', 'americanoice', 'hotcafelatte', 'anything'])
); // 19000
console.log(solution(['americanoice', 'americano', 'iceamericano'])); // 13500
