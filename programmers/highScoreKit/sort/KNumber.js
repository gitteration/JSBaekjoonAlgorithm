// 문제 링크 https://programmers.co.kr/learn/courses/30/lessons/42748
function solution(array, commands) {
    let answer = [];
    for(const index in commands){
        const [i,j,k] = [commands[index][0]-1, commands[index][1], commands[index][2]-1];
        const target_value = array.slice(i,j).sort((a,b)=>{return a-b})[k];
        answer.push(target_value);
    }
    return answer;
}