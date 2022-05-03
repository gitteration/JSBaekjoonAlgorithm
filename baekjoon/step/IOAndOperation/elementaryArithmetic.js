// 문제 링크 https://www.acmicpc.net/problem/10869

// 풀이

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

(function(){
	rl.on('line', function (line) {
		line = line.split(' ');
		const A = Number(line[0])
		const B = Number(line[1])
		const plus = A + B;
		const minus = A - B;
		const multiply = A * B;
		const division =  Math.trunc(A / B);
		const percent = A % B;
		console.log(plus);
		console.log(minus);
		console.log(multiply);
		console.log(division);
		console.log(percent);
		rl.close();
	})
})()