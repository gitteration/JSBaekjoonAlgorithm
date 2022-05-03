// 문제 링크 https://www.acmicpc.net/problem/15552

// 풀이
const readline = require('readline');
const {stdin: input, stdout:output} = require('process');
const rl = readline.createInterface({input, output});

(async function(){
	let numbers = [];
	let result = '';
	for await(const line of rl){
		numbers.push(line.trim().split(' ').map(num=> Number(num)));
		const line_limit = numbers[0][0] + 1;
		if(line_limit <= numbers.length){
			numbers.shift(); 
			break;
		}; 
	}
	for(let i in numbers){
		result += `${numbers[i][0] + numbers[i][1]}\n`;
	}
	console.log(result);
})();





