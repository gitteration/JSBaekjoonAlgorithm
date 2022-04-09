/**
- 문제 - 
두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

- 입력 -
두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

- 출력 -
첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

- 예제 입력 - 
7 3

- 예제 출력 -
10
4
21
2
1

*/

// 풀이

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

(function(){
	rl.on('line', function (line) {
		line = line.split(' ');
		const A = Number(line[0])
		const B = Number(line[1])
		const plus = A + B;
		const minus = A - B;
		const multiply = A * B;
		const division =  Math.trunc(A / B);
		const percent = A % B;
		console.log(plus);
		console.log(minus);
		console.log(multiply);
		console.log(division);
		console.log(percent);
		rl.close();
	})
})()