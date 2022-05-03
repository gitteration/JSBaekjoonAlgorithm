// 문제 링크 https://www.acmicpc.net/problem/10951

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});
let numbers = [];
rl.on('line', (line)=> {
	if(line.trim() === '') rl.close();
	numbers.push(line.trim().split(' ').map(num => Number(num)));
}).on('close', ()=> {
	let result = ``;
	for(let index in numbers){
		result += `${numbers[index][0] + numbers[index][1]}\n`
	}
	console.log(`${result.trim()}`);
});