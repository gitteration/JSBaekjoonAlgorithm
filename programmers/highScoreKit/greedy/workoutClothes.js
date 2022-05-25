// 문제 링크 https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript#

function solution(n, lost, reserve) {
    let answer = n;
    //만약에 여벌의 옷을 가져온 학생이 도난 당했을 경우 못 빌려줌으로 제외시키자.
    const real_reserve = reserve.filter(el => !lost.includes(el)).sort((a,b) => a - b);  
    const real_lost = lost.filter(el => !reserve.includes(el)).sort((a,b) => a - b);
    answer -= real_lost.length;
    for(let i = 0; i < real_lost.length; i ++){
        if(real_reserve.includes(real_lost[i] - 1)){
            real_reserve.splice(real_reserve.indexOf(real_lost[i] - 1), 1);
            real_lost.splice(i,1);
            answer ++;   
            i --;
        }
        if(real_reserve.includes(real_lost[i] + 1)){
            real_reserve.splice(real_reserve.indexOf(real_lost[i] + 1), 1);
            real_lost.splice(i,1);
            answer ++;
            i --;
        }
    }
    return answer;
}