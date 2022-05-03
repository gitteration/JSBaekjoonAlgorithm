// 문제 링크 https://www.acmicpc.net/problem/2525

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

(async function(){
	const limit = 3;
	let numbers = [];
	for await(const line of rl){
		numbers.push(...line.trim().split(' ').map(num => Number(num)));
		if(numbers.length >= limit) break;
	}

	let [hour, minute, add_minute] = numbers;
	if(!(hour >= 0 && hour <= 23) || !(minute >= 0 && minute <= 59) || !(add_minute >= 0 && add_minute <= 1000)){	//0 ≤ hour ≤ 23, 0 ≤ minute ≤ 59 validate
		console.log('올바른 시간을 입력해주세요');
		rl.close();
		return;
	}
	minute += add_minute;
	if(minute >= 60){
		const division = Math.floor(minute / 60);
		hour += division;
		minute = minute - 60 * division;
		hour = hour >= 24 ? hour - 24 : hour;
		console.log(hour %= 24)
	}
	console.log(`${hour} ${minute}`);
})();














