// 문제링크 https://www.acmicpc.net/step/5


function main(){
	const arr = new Array(10001);
	for (let i = 1; i <= 10000; i++) {
		arr[setIndex(i)] = true;
		if (!arr[i]){
			console.log(i);
		} 
	}
}

function setIndex(i){
	let sum = i;
	while(true){
		if(i === 0){
			break;
		}
		sum += i % 10;
		i = parseInt(i / 10);
	}
	return sum;
}

main();