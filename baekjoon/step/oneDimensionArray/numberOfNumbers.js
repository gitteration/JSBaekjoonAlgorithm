// 문제 링크 https://www.acmicpc.net/problem/2577

const raedline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = raedline.createInterface({input, output});

let multiplication_result = 1;
let limit = 3;
let count = 0;

rl.on('line', (line)=> {
	line = Number(line.trim());
	count ++;
	multiplication_result *= line;
	if(count >= limit){
		multiplication_result = String(multiplication_result).split('');;
		rl.close();
	};
}).on('close', ()=> {
	let result = '';
	let getCount = multiplication_result.reduce((pv, cv)=>{ 
		pv[cv] = (pv[cv] || 0) + 1; 
		return pv; 
	},[]);
	for(let i = 0; i <= 9; i++){
		getCount[i] = (getCount[i] || 0);
		result += `${getCount[i]}\n`;
	};
	console.log(result.trim());
});