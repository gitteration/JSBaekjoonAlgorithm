//문제링크 https://www.acmicpc.net/problem/1152

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

rl.on('line', (line) => {
	line = line.trim().split(' ');
	for(let i=0; i<line.length; i++){
		if(line[i] == ''){
			line.splice(i,1);
			i --;
		}
	}
	console.log(line.length);
	rl.close();
});