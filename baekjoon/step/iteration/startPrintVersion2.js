// 문제 링크 https://www.acmicpc.net/problem/2439
const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

rl.on('line', (line)=> {
	const number = Number(line.trim());
	let stars = '';
	let white_space = '';
	let result = '';
	for(let i=1; i<=number; i++){
		stars += '*';
		white_space = ' '.repeat(number-i);
		result += `${white_space}${stars}\n`
	}
	console.log(`${result}`);
});