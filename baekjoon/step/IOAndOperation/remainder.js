// 문제 링크 https://www.acmicpc.net/problem/10430
// 풀이
const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

(function(){
	rl.on('line', function(number){
		let numbers = number.split(' ');
		numbers = numbers.map( num => Number(num))
		const result1 = (numbers[0] + numbers[1]) % numbers[2];
		const result2 = ((numbers[0] % numbers[2]) + (numbers[1] % numbers[2])) % numbers[2];
		const result3 = (numbers[0] * numbers[1]) % numbers[2]
		const result4 = ((numbers[0] % numbers[2]) * (numbers[1]%numbers[2])) % numbers[2];
		console.log(`${result1}\n${result2}\n${result3}\n${result4}`)
		rl.close();
	})
})()