/**
- 문제 -
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

- 입력 -
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

- 출력 -
첫째 줄에 A+B를 출력한다.

- 예제 입력 -  
1 2

- 예제 출력 -  
3

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
		console.log(A + B);
		rl.close();
	})
})()