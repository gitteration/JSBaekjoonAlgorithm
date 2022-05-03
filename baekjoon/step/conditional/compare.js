// 문제 링크 https://www.acmicpc.net/problem/1330

const readline = require('readline');
const {stdin:input, stdout:output} = require('process');
const rl = readline.createInterface({input, output});

(async function(){
	for await(const line of rl){
		const numbers = line.trim().split(' ').map(num => Number(num));
		const num1 = numbers[0];
		const num2 = numbers[1];
		if(num1 < num2){
			console.log("<");
		}else if(num1 > num2){
			console.log(">")
		}else{
			console.log('==');
		}
	}
})()

