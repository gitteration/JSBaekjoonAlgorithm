let array = [5,8,2,3,4,1,6,7,9];
let sorted_array = heapSort(array);
console.log(sorted_array);

function heapify(array, i){
	let idx = parseInt(i/2)-1;
	while(idx >= 0){
		// 같은 레벨에 있는 노드들에서 왼쪽 노드와 오른쪽 노드를 정한다.
		const left = array[idx*2+1];
		const right = array[idx*2+2];
		// 왼쪽 노드와 오른쪽 노드를 비교하여 서로 값을 바꿔줍니다
		if(left >= right && array[idx] < left){
			temp = array[idx];
			array[idx*2+1] = temp;
			array[idx] = left;		
		}else if(right > left && array[idx] < right){
			temp = array[idx];
			array[idx*2+2] = temp;
			array[idx] = right;
		}
		idx--;
	}
	return array;
}

function heapSort(array){
	// 리프 노드로부터 접근을 시작
	for(let i = array.length-1; i >= 0; i--){
		// 최대 힙 생성 함수
		array = heapify(array, i);
		// 루트 노드가 자식 노드보다 크면 서로 값을 바꿔줍니다.
		if(array[0] > array[i]){
			let temp = array[i];
			array[i] = array[0];
			array[0] = temp;
		}
	}
	return array;
}
