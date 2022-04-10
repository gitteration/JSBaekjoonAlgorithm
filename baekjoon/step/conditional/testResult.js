/**
- 문제 -
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

- 입력 -
첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

- 출력 -
시험 성적을 출력한다.

- 예제 입력 1 -
100

- 예제 출력 1 -
A

*/

// 풀이
const readline = require('readline');
const {stdin:input, stdout:output} = require('process');
const rl = readline.createInterface({input, output});

rl.on('line', (line) => {
	const score = Number(line);
	let result;
	switch(true){
		case (score >= 90 && score <= 100) : 
			result = 'A'; 
			break;
		case (score >= 80 && score <= 89) : 
			result = 'B';
			break;
		case (score >= 70 && score <= 79) : 
			result = 'C';
			break;
		case (score >= 60 && score <= 69) : 
			result = 'D';
			break;
		default : 
			result = 'F';
			break;
	}
	console.log(result);	
	rl.close();
})
