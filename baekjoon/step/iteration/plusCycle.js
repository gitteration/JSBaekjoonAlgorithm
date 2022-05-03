// 문제 링크 https://www.acmicpc.net/problem/1110

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

rl.on('line', (line)=> {
	line = Number(line);
	const original_number = line;
	let new_number = original_number;
	let count = 0;
	while(true){
		let front_operand = Math.floor(new_number / 10);
		let back_operand = new_number % 10;
		let remainder_of_sum = (front_operand + back_operand) % 10;
		new_number = (back_operand * 10) + remainder_of_sum 
		count ++;
		if(original_number === new_number) break;
	}
	console.log(`${count}`);
});