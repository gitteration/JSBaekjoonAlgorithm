let array = [5,8,2,3,4,1,6,7,9];
let sorted_array = quickSort(array);
console.log(sorted_array);

function quickSort(array) {
	// 배열의 길이가 1과 같거나 작게 될 경우 배열을 바로 리턴
	if (array.length <= 1) return array;  

	const pivot = array[0];  //첫번째 인덱스를 pivot으로 정하고
	const left = [];
	const right = [];

	// pivot보다 작으면 left, 크면 right라는 배열에 push 합니다.
	for (let i = 1; i < array.length; i++) {
		if (array[i] <= pivot) left.push(array[i]);
		else right.push(array[i]);
	}
	//left와 right에 원소들을 넣고 다시 재귀하도록 합니다.
	console.log('pivot:::', pivot);
	console.log('left:::', left);
	console.log('right:::', right);
	const sorted_left = quickSort(left);
	const sorted_right = quickSort(right);
	console.log('sorted_left:::', sorted_left);
	console.log('sorted_right:::', sorted_right);
	console.log(`----------------------`);
	// 마지막으로 left, pivot, right를 병합하여 리턴합니다.
	return [...sorted_left, pivot, ...sorted_right];
};
