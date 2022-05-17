// 문제링크 https://www.acmicpc.net/problem/11720

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

function Line(){
    let number_limit = 0;
    let number = 0;
    this.getNumberLimti = () => number_limit;
    this.setNumberLimit = (limit) => number_limit = limit; 
    this.getNumber = () => number;
    this.setNumber = (num) => {
        if(number_limit === num.length){
            number = num;
            rl.close();
            this.setNumber = null;
        }else{
            console.log(`입력하신 숫자의 길이는 ${number_limit}입니다`);
        }
    }
    
}
Line.prototype.sum = (num) => {
    let result = 0;
    for(const i in num){
        result += Number(num[i]);
    }
    return result;
}


let line_count = 0;
const l = new Line();
rl.on('line', (line) =>{
    if(line_count === 0){
        line = Number(line.trim());
        l.setNumberLimit(line);
    }else{
        l.setNumber(line);
    }
    line_count ++;   
}).on('close', () => {
    let number = l.getNumber();
    let result = l.sum(number); 
    console.log(`${result}`);
})
