// 문제 링크 https://programmers.co.kr/learn/courses/30/lessons/42840#
function solution(answers) {
    const patterns = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    let right_count = []; 
    let answer = [];
    for(const i in patterns){
        const pattern = patterns[i];
        right_count.push(answers.filter((el, j) => el == pattern[j%pattern.length]).length);
    }
    const max_of_answer = Math.max(...right_count);
    for(const i in right_count){
        if(right_count[i] == max_of_answer){
            answer.push(Number(i) + 1);
        }
    }
    return answer;
}