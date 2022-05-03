// 문제 링크 https://www.acmicpc.net/problem/9498

// 풀이
const readline = require('readline');
const {stdin:input, stdout:output} = require('process');
const rl = readline.createInterface({input, output});

rl.on('line', (line) => {
	const score = Number(line);
	let result;
	switch(true){
		case (score >= 90 && score <= 100) : 
			result = 'A'; 
			break;
		case (score >= 80 && score <= 89) : 
			result = 'B';
			break;
		case (score >= 70 && score <= 79) : 
			result = 'C';
			break;
		case (score >= 60 && score <= 69) : 
			result = 'D';
			break;
		default : 
			result = 'F';
			break;
	}
	console.log(result);	
	rl.close();
})
