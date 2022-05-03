// 문제 링크 https://www.acmicpc.net/problem/11021

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

(async function(){
	let numbers = [];
	let result = '';
	let index = 1;
	for await(const line of rl){
		const number = line.trim().split(' ').map(num => Number(num));
		numbers.push(number);
		if(numbers.length >= 2){
			result += `Case #${index}: ${numbers[index][0] + numbers[index][1]}\n`;
			index ++;
			if(numbers[0][0]+1 <= numbers.length) break;
		};
	};
	console.log(`${result}`);
})()
