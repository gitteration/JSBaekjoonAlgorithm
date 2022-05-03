// 문제 링크 https://www.acmicpc.net/problem/18108
// 풀이

const readline = require('readline');
const {stdin:input, stdout:output} = require('process');
const rl = readline.createInterface({input, output});
// 불기연도와 서기연도 차는 543
rl.on('line', function(buddhism_year){
	const christian_year = buddhism_year - 543;
	console.log(christian_year);
	rl.close();
})