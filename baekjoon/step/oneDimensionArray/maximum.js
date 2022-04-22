/**
- 문제 -
9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
예를 들어, 서로 다른 9개의 자연수
3, 29, 38, 12, 57, 74, 40, 85, 61
이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

- 입력 -
첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

- 출력 -
첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

- 예제 입력 1 -
3
29
38
12
57
74
40
85
61

- 예제 출력 1 -
85
8

*/

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});
const limit = 9;

let numbers = [];
let maximum = 0;
let maximum_index = 0;
rl.on('line', (line)=> {
	line = Number(line.trim());
	numbers.push(line);
	if(numbers.length >= limit) rl.close();
}).on('close', ()=> {
	for(let index in numbers){
		if(maximum < numbers[index]){
			maximum = numbers[index];
			maximum_index = Number(index)+1; 
		}; 
	};
	console.log(`${maximum}\n${maximum_index}`);
})

