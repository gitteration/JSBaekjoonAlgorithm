let array = [];
for (let i = 1; i <= 1000; i++) {   // 1 ~ 1000 정렬 데이터 셋팅
    array.push(i);
}
const input_number = 981;        // 탐색할 값을 입력해 주세요
binarySearch(input_number, array);

function binarySearch (target, dataArray) {
    let start_index = 0;
    let end_index = dataArray.length - 1;
    let count = 0;
    if(target < 1 || target > 1000){
        console.log(`1 ~ 1000 범위 밖에 있는 데이터를 입력하셨습니다.`);
        return;
    }
    while (start_index <= end_index) {
        let middle_index = Math.floor((end_index + start_index) / 2); 
        let middle_value = dataArray[middle_index];
        count++;
        console.log(`탐색 횟수 : ${count} --- start_index: ${start_index}, middle_index: ${middle_index}, end_index: ${end_index}, middle_value: ${dataArray[middle_index]}`);
        if (middle_value === target) {
            console.log(`${count}번 탐색하여 ${middle_value}를 찾았습니다!!`);
            return;
        } else if (middle_value > target) {
            end_index = middle_index - 1;
        } else {
            start_index = middle_index + 1;
        }
    }
};
