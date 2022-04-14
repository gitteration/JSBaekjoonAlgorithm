/**
- 문제 -
1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 
같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  
예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.
3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

- 입력 -
첫째 줄에 3개의 눈이 빈칸을 사이에 두고 각각 주어진다. 

- 출력 -
첫째 줄에 게임의 상금을 출력 한다.

- 예제 입력 1 - 
3 3 6

- 예제 출력 1 -
1300

- 예제 입력 2 -
2 2 2

- 예제 출력 2 -
12000

- 예제 입력 3 -
6 2 5

- 예제 출력 3 -
600

*/

// 풀이
const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});
rl.on('line', (line) => {
	const validateSameDice = (dice_numbers) => {
		const [a, b,c ] = dice_numbers;
		let same_dice = 0;	 	  // 동일한 주사위 개수
		let dice_number = 0; 	  // 주사위 번호 
		if(a === b && a === c){	  // 3개가 동일한 경우
			same_dice = 3;
			dice_number = a;
		}else if(a === b || a === c || b === c){	// 2개가 동일한 경우
			same_dice = 2;
			dice_number = b === c ? b : a;	
		}else{
			same_dice = 1;
			dice_number = c;
		}
		return [same_dice, dice_number];
	};

	const calculateReward = (same_dice, dice_number) => {
		switch(same_dice){
			case 1 : return dice_number * 100;
			case 2 : return 1000 + dice_number * 100;
			case 3 : return 10000 + dice_number * 1000;
			default : return;
		}
	};

	const dice_numbers = line.trim().split(' ').map(num => Number(num)).sort((a, b)=> a - b);
	const [same_dice, dice_number] = validateSameDice(dice_numbers);
	const reword = calculateReward(same_dice, dice_number);
	console.log(reword);
})