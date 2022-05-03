// 문제 링크 https://www.acmicpc.net/problem/1546

// 풀이

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

let scores;
let limit;
rl.on('line', (line) => {
	if(!limit){
		limit = Number(line);
	}else{
		scores = line.trim().split(' ').map(num => Number(num));
		limit === scores.length ? rl.close() : console.log(`입력하신 배열의 크기가 다릅니다. 입력하신 배열의 크기는 ${limit} 입니다`);
	}
}).on('close', ()=> {
	const maximum = Math.max(...scores);
	let result = 0;
	scores = scores.map(score => (score / maximum) * 100);
	for(let index in scores){
		result += scores[index];
	}
	result = parseFloat(result / limit);
	console.log(result);
})