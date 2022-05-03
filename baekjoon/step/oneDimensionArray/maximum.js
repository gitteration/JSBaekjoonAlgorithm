// 문제 링크 https://www.acmicpc.net/problem/2562

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});
const limit = 9;

let numbers = [];
let maximum = 0;
let maximum_index = 0;
rl.on('line', (line)=> {
	line = Number(line.trim());
	numbers.push(line);
	if(numbers.length >= limit) rl.close();
}).on('close', ()=> {
	for(let index in numbers){
		if(maximum < numbers[index]){
			maximum = numbers[index];
			maximum_index = Number(index)+1; 
		}; 
	};
	console.log(`${maximum}\n${maximum_index}`);
})

