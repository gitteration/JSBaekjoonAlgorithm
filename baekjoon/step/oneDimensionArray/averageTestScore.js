// 문제 링크 https://www.acmicpc.net/problem/4344

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

function Info(){
	let score = [];
	let line_limit;
}

Info.prototype.setLineLimit = (line) => {
	this.score = line;
}
Info.prototype.getLineLimit = () => {
	return this.score;
}


rl.on('line', (line) => {
	const info = new Info();
	let line_limit = info.getLineLimit();
	if(!line_limit){
		info.setLineLimit(Number(line));
	}else{
		line = line.trim().split(' ').map(num => Number(num));
		score.push(line);
		line_limit === score.length ? rl.close() : undefined;
	}
}).on('close', ()=> {
	let result = '';
	for(let index in score){
		let sum = 0;
		let average = 0;
		let number_of_socre = 0;
		score[index].forEach(element => {
			number_of_socre === 0 ? number_of_socre = element : sum += element;
		});
		average = parseFloat(sum / number_of_socre);
		result += `${average}%\n`;
	}
	console.log(result);
});
