/**
- 문제 -
(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

- 입력 -
첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

- 출력 -
첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

- 예제 입력 -
5 8 4

- 예제 출력 -
1
1
0
0

*/

// 풀이
const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

(function(){
	rl.on('line', function(number){
		let numbers = number.split(' ');
		numbers = numbers.map( num => Number(num))
		const result1 = (numbers[0] + numbers[1]) % numbers[2];
		const result2 = ((numbers[0] % numbers[2]) + (numbers[1] % numbers[2])) % numbers[2];
		const result3 = (numbers[0] * numbers[1]) % numbers[2]
		const result4 = ((numbers[0] % numbers[2]) * (numbers[1]%numbers[2])) % numbers[2];
		console.log(`${result1}\n${result2}\n${result3}\n${result4}`)
		rl.close();
	})
})()