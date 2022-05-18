// 문제링크 https://programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
    let map = new Map();
    participant.forEach(element => {
        map[element] = map[element] ? map[element] + 1 : 1;        
    })
    completion.forEach(element => {
        map[element] = map[element] - 1;
    })
    for (var key in map) {
        if (map[key] >= 1){
            return key;  
        } 
    }
}