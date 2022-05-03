// 문제 링크 https://www.acmicpc.net/problem/10871

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

