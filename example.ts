import _ from 'lodash';

for (const i of [1, 2, 3]) {
	console.info(i);
}

console.log(_.chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]