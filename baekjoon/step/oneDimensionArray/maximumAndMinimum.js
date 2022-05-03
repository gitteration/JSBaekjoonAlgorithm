// 문제 링크 https://www.acmicpc.net/problem/10818
const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

let array_size = 0;
rl.on('line', (line)=> {
	if(array_size === 0) array_size = Number(line.trim()); 
	else{
		const numbers = line.trim().split(' ').map(num => Number(num));
		let maximum = Math.max(...numbers);
		let minimum = Math.min(...numbers);
		console.log(`${minimum} ${maximum}`);
	}
})