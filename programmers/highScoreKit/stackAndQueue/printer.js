// 문제링크 https://programmers.co.kr/learn/courses/30/lessons/42587#

function solution(priorities, location) { 
    let result = 0;
    while(true){
        let max_of_priority = Math.max(...priorities);
        if(priorities[0] < max_of_priority){
            location --;
            if(location < 0){
                location = priorities.length - 1;   
            }    
            priorities.push(priorities.shift());
        }else{
            result ++;
            location --;
            priorities.shift();
            if(location < 0){
                break;
            }
        }
    }
    return result;
}