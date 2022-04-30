// 문제 링크 https://www.acmicpc.net/problem/8958

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

let ox;
let line_limit;
rl.on('line', (line) => {
	if(!line_limit){
		line_limit = Number(line);
	}else{
		ox = line.trim().split(' ').map(ox => String(ox));
		line_limit === scores.length ? rl.close() : console.log(`입력하신 배열의 크기가 다릅니다. 입력하신 배열의 크기는 ${limit} 입니다`);
	}
}).on('close', ()=> {
	let result = '';
	for(let index in ox){
		ox[index].red
	}
})