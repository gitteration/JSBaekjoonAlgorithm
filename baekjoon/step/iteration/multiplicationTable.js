// 문제 링크 https://www.acmicpc.net/problem/2739

//풀이
const readline = require('readline');
const {stdin:input, stdout:output} = require('process');
const rl = readline.createInterface({input, output});

rl.on('line', (line)=>{
	const number = Number(line.trim());
	for(let i = 1; i < 10; i++ ){
		console.log(`${number} * ${i} = ${number * i}`);
	}
});