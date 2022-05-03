// 문제 링크 https://www.acmicpc.net/problem/2438

const readline = require('readline');
const {stdin: input, stdout:output} = require('process');
const rl = readline.createInterface({input,output});

rl.on('line', (line)=>{
	const number = Number(line.trim());
	let result = '';
	let stars = '';
	for(let i=0; i<number; i++){
		stars += '*';
		result += `${stars}\n`
	}
	console.log(`${result.trim()}`);
})