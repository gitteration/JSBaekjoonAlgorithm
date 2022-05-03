// 문제 링크 https://www.acmicpc.net/problem/1000

// 풀이

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

(function(){
	rl.on('line', function (line) {
		line = line.split(' ');
		const A = Number(line[0])
		const B = Number(line[1])
		console.log(A + B);
		rl.close();
	})
})()