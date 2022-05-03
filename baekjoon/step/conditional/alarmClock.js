// 문제 링크 https://www.acmicpc.net/problem/2884

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

rl.on('line', (line) => {
	let [hour, minute] = line.trim().split(' ').map(num => Number(num));
	let minus = 45;
	if(!(hour >= 0 && hour <= 23) || !(minute >= 0 && minute <= 59)){	//0 ≤ hour ≤ 23, 0 ≤ minute ≤ 59 validate
		console.log('올바른 시간을 입력해주세요');
		rl.close();
	};
	minute -= minus;
	if(minute < 0){
		hour -= 1;
		minute = 60 + minute;
	} 
	if(hour < 0){
		hour = 24 + hour;
	}
	console.log(`${hour} ${minute}`);
});












