// 문제링크 https://www.acmicpc.net/problem/11654
const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

rl.on('line', function(line){
	const string = line.trim().charCodeAt();
	console.log(`${string}`);
	rl.close();
})
