// 문제 링크 https://www.acmicpc.net/problem/1065

const readline = require('readline');
const {stdin: input, stdout:output} = require('process');
const rl = readline.createInterface({input, output});

let number = 0;
let result = 0;
rl.on('line', function(line){
	number = Number(line.trim());
	rl.close();
}).on('close', function(){
	if(number < 100){
		result = number;
	}else{
		result = 99;
		for(let i=100; i<=number; i++){
			let first_number = parseInt(i / 100); 
			let second_number = parseInt((i / 10) % 10);
			let third_nuber = i % 10;
			if(first_number - second_number == second_number - third_nuber){
				result ++;
			}
		}
	}
	console.log(`${result}`);
})