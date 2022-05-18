// 문제링크 https://www.acmicpc.net/problem/1157

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

rl.on('line', (line) => {
	line = line.toUpperCase().split('');
	line = line.reduce((acc, curr) => {
		acc[curr] = acc[curr] ? acc[curr]+1 : 1; 
		return acc;
	},{});
	line = Object.entries(line).sort((a, b) => a[1] - b[1]);
	let result;
	if(line.length == 1){
		result = line[line.length-1][0];
	}else if(line[line.length-1][1] == line[line.length-2][1]){
		result = '?';
	}else{
		result = line[line.length-1][0];
	}
	console.log(result);
	rl.close();
});