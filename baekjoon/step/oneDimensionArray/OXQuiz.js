// 문제 링크 https://www.acmicpc.net/problem/8958

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

let ox = [];
let line_limit;
let temp;
rl.on('line', (line) => {
	if(!line_limit){
		line_limit = Number(line);
	}else{
		line = line.trim().split('').map(value => String(value));
		ox.push(line);
		line_limit === ox.length ? rl.close() : undefined;
	}
}).on('close', ()=> {
	let result = '';
	for(let index in ox){
		temp = 0;
		let score = ox[index].reduce(calculate,0);
		result += `${score}\n`;
	}
	console.log(result.trim());

});

function calculate(accumulator, currentValue){
	if(currentValue === 'O'){
		accumulator += ++ temp;
	}else{
		temp = 0;
	};
	return accumulator;
}