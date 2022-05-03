// 문제 링크 https://www.acmicpc.net/problem/14681

/**
 *  숫자 A, 숫자 B 일 때 
 *  A,B 둘 다 양수이면    1사(all)
 *  A,B에서 A가 음수이면  2사(sin)
 *  A,B 둘 다 음수이면    3사(tan)
 * 	A,B에서 B가 음수이면  4사(cos)
 */

const readline = require('readline');
const {stdin:input, stdout:output} = require('process');
const rl = readline.createInterface({input,output});
(async function(){
	let numbers = [];
	for await(const line of rl){
		numbers.push(Number(line));
		if(numbers.length >= 2) break;
	}
	let [x, y] = numbers;
	let result;
	if(x > 0 && y > 0){
		result = 1;
	}else if(x < 0 && y > 0){
		result = 2;
	}else if(x < 0 && y < 0){
		result = 3;
	}else{
		result = 4;
	}	
	console.log(result);
})();










