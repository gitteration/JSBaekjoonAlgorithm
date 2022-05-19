// 문제링크 https://programmers.co.kr/learn/courses/30/lessons/42578#

function solution(clothes) {
    let answer = 1;
    let map = new Map();
    for(let i=0;i<clothes.length;i++){
        let value = (map.get(clothes[i][1]) || 1) + 1; 
        map.set(clothes[i][1], value);
    }
    console.log(map)
    for(var [key, value] of map){
        answer *= value
    }
    
    return answer-1;
}