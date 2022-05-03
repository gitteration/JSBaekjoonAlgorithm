// 문제 링크 https://www.acmicpc.net/problem/2753

const readline = require('readline');
const {stdin:input, stdout:output} = require('process');
const rl = readline.createInterface({input, output});

rl.on('line', (line) => {
	const year = Number(line);
	let remainder1 = year % 4;
	let remainder2 = year % 400;
	let remainder3 = year % 100;
	let result = 0; 
	if(remainder1 === 0){
		result = remainder2 === 0 || remainder3 != 0 ? 1 : 0;
	}
	console.log(result)
});
