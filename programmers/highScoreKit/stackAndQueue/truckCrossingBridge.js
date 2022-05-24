// 문제링크 https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript#

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let crossing_truck = new Array(bridge_length).fill(0);  // 해당 크기만큼 배열로 할당(초기 0값 재할당);
    while(true){
        time ++;    // 1초 증가
        truck_weights.length != 0 ? crossing_truck.shift() : undefined;     // 현재 대기중인 트럭이 없으면 건너고 있는 트럭밖에 없을 것이고 건너는 트럭 배열의 0을 삭제
        const crossing_truck_sum = crossing_truck.reduce((acc, curr) => acc + curr) + truck_weights[0];     // 현재 건너고 있는 트럭의 무게 합과 앞에 대기중인 트러그이 무게 합
        // crossing_truck_sum 이 weight 보다 적게 나가면 대기중인 트럭 하나를 넣어주고 아니면 대기중인 트럭이 있을 경우 0을 push하여 기달리게 하자
        crossing_truck_sum <= weight ? crossing_truck.push(truck_weights.shift()) : (truck_weights.length != 0 ? crossing_truck.push(0) : crossing_truck.shift());      
        if(crossing_truck.length == 0) return time;
    }
}