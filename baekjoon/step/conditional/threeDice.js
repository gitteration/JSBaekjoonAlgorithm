// 문제 링크 https://www.acmicpc.net/problem/2480

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