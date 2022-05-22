// 문제링크 https://programmers.co.kr/learn/courses/30/lessons/42587#

function solution(priorities, location) { 
    const target = priorities[location];
    let max_of_index = priorities.indexOf(Math.max(...priorities));
    let result = 0;
    // priorities 배열안에 최댓값 인덱스를 기준으로 좌측 요소가 location 위치와 동일하지 않으면서 target보다 작거나 같을 때 해당 요소 삭제
    for(let i = 0; i < max_of_index; i++){
        if(i != location && target >= priorities[i]){
            priorities.splice(i,1);
            i--;
            max_of_index--;
            location--;
        }
    }
    for(let j = max_of_index; j < priorities.length; j++){
        if(j != location && target > priorities[j]){
            priorities.splice(j,1);
            j--;
            location--;
        }
    }
    console.log(priorities, location)
    result = priorities.length;
    return result;
}