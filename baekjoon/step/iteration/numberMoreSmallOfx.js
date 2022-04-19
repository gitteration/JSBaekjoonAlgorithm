/**
- 문제 -
정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

- 입력 -
첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)
둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

- 출력 -
X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

- 예제 입력 1 -
10 5
1 10 4 9 2 3 8 5 7 6

- 예제 출력 1 -
1 4 2 3
*/

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

(async function(){
	const numbers = [];
	const line_limit = 2;
	for await(const line of rl){
		const line_parse = line.trim().split(' ').map(num => Number(num));
		numbers.push(line_parse);
		if(numbers.length >= line_limit){
			break;
		};
	};
	const [array_limit_count, value_limit] = numbers[0];
	const values = numbers[1];
	let result = '';
	for(let index in values){
		if(values[index] < value_limit) result += `${values[index]} `;
	}
	console.log(`${result}`);
})();

