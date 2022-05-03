// 문제 링크 https://www.acmicpc.net/problem/8393

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

rl.on('line', (line)=> {
	const number = Number(line.trim());
	let sum = 0;
	for(let i = 0; i<=number; i++){
		sum += i;
	}
	console.log(`${sum}`);
});