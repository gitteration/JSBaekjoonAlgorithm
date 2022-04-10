/**
- 문제 -
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

	472 --- (1)
   *385 --- (2)
-------
   2360 --- (3)
  3776  --- (4)
 1416   --- (5)
-------
181720  --- (6)

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

- 입력 -
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

- 출력 -
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

- 예제 입력 1 - 
472
385

- 예제 출력 1 - 
2360
3776
1416
181720

*/

// 풀이
const {stdin: input, stdout: output} = require('process');
const readline =  require('readline');
const rl = readline.createInterface({input, output});
(async function(){
	let numbers = []
	for await (const line of rl) {
		numbers.push(line)
		if(numbers.length === 2){
			break
		}
	}
	let number1 = numbers[0];
	let number2 = numbers[1];
	let result = [];
	let sum = 0;
	number1 = Number(number1);
	number2 = number2.split('').map(num => Number(num)).reverse();
	for(index2 in number2){
		let multiply = number2[index2] * number1;
		result.push(multiply);
	}
	number2 = Number(number2.reverse().join(''));
	sum = number1 * number2;
	result.push(sum);
	for(index3 in result){
		console.log(result[index3]);
	}
	rl.close();
})()