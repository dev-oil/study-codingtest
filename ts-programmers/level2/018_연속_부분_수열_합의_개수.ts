{
	// https://school.programmers.co.kr/learn/courses/30/lessons/131701

	// 1. 원형 수열 배열의 길이 n을 구한다. n = elements.length
	// 2. 최종 합들을 모을 sums: number[] 를 만든다.
	// 3. 원형 처리: doubled = [...elements, ...elements] 로 이어 붙인다 (원형 → 평평한 배열, 길이 2n)
	// 4. doubled에서 길이 1~n, 시작 0~n-1 의 모든 조합으로 조각들(number[][])을 만든다 (이중 for문)
	// 5. 각 조각의 합을 구해 일차원 배열(number[])로 만든 다음 sums 합친다
	// 6. 마지막으로 new Set(sums)로 변환해서 중복 제거하고 size를 return 하면 끝
	// 제한: n ≤ 1,000, 원소 자연수 → O(n²) OK (조각 최대 100만 개)

	const solution = (elements: number[]): number => {
		const n: number = elements.length;
		const sums: number[] = [];

		const doubled: number[] = [...elements, ...elements];

		for (let len = 1; len <= n; len++) {
			for (let start = 0; start < n; start++) {
				sums.push(
					doubled.slice(start, start + len).reduce((acc, cur) => acc + cur, 0),
				);
			}
		}

		return [...new Set(sums)].length;
	};

	// test
	console.log(solution([7, 9, 1, 1, 4])); // 18
}
