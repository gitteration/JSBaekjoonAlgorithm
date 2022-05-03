// 문제 링크 https://www.acmicpc.net/problem/3052

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

const limit = 10;
let numbers = new Set();
let count = 0;
rl.on('line', (line)=> {
	const remain = Number(line.trim()) % 42;
	numbers.add(remain);
	count ++;
	if(count >= limit){
		console.log(numbers.size)
		rl.close();
	};
});
