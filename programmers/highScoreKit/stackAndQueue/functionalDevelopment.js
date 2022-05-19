// 문제링크 https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript#

function solution(progresses, speeds) {
    const arr = [];
    let answer = [0];
    for(const index in progresses){
        let count = 0;
        while(progresses[index] < 100){
            count ++;
            progresses[index] = progresses[index] + speeds[index];
        }
        arr.push(count);
    }
    let temp = arr[0];
    for(let i = 0, j = 0; i < arr.length; i++){
        if(temp >= arr[i]){
            answer[j] += 1;
        }else{
            temp = arr[i];
            answer[++j] = 1;
        }    
    }
    return answer;
}