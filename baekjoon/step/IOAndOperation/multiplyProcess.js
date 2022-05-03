// 문제 링크 https://www.acmicpc.net/problem/2588

// 풀이
const {stdin: input, stdout: output} = require('process');
const readline =  require('readline');
const rl = readline.createInterface({input, output});
(async function(){
	let numbers = []
	for await (const line of rl) {
		numbers.push(line)
		if(numbers.length === 2){
			break
		}
	}
	let number1 = numbers[0];
	let number2 = numbers[1];
	let result = [];
	let sum = 0;
	number1 = Number(number1);
	number2 = number2.split('').map(num => Number(num)).reverse();
	for(index2 in number2){
		let multiply = number2[index2] * number1;
		result.push(multiply);
	}
	number2 = Number(number2.reverse().join(''));
	sum = number1 * number2;
	result.push(sum);
	for(index3 in result){
		console.log(result[index3]);
	}
	rl.close();
})()