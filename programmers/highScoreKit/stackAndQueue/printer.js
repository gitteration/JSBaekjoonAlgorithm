// 문제링크 https://programmers.co.kr/learn/courses/30/lessons/42587#

function solution(priorities, location) { 
	// 순위 초기화
	let result = 0;
	// 대기목록이 다 비워질 때 까지
	while (priorities.length) {
		// 대기목록 첫번째 요소 배열 최대값보다 작은 경우
		const max_of_priority = Math.max(...priorities);
		if (priorities[0] < max_of_priority) {
			// 첫번째 요소가 자신일 경우 location을 배열 마지막으로 옮김
			if (--location < 0) location = priorities.length - 1;
			// 제일 앞 요소를 뺴서 제일 뒤에 넣는다
			priorities.push(priorities.shift());
		} else {
			// 순위를 업데이트 해줌
			result++;
			// 배열을 빠져나가는 게 자신일 경우 멈추고 순위를 return
			if (--location < 0) return result;
			// 자신이 아니면 제일 앞의 요소 빼낸다.
			priorities.shift();
		}
	}
	return result;
}