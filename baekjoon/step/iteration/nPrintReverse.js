// 문제 링크 https://www.acmicpc.net/problem/2742

const readline = require('readline');
const {stdin:input, stdout:output} = require('process');
const rl = readline.createInterface({input, output});
rl.on('line', (line)=> {
	const number = Number(line.trim());
	let result = '';
	for(i=number; i>=1; i--){
		result += `${i}\n`;
	}
	console.log(result.trim());
});