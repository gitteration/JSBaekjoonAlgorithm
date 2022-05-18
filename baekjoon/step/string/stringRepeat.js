// 문제링크 https://www.acmicpc.net/problem/2675

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

function Line(rt, str){
	const repeat_times = Number(rt);
	const string = String(str);
	this.getAllInfo = () => [repeat_times, string];
}
Line.prototype.repeatString = (rt, str)=>{
	let result = '';
	for(const index in str){
		result += str[index].repeat(rt);
	}
	return `${result}\n`;
}

let line_limit;
let count = 0;
let result = '';
rl.on('line', (line) => {
	if(!line_limit){
		line = Number(line.trim());
		line_limit = line; 
	}else{
		count ++;
		line = line.split(' ');
		const l = new Line(line[0], line[1]);
		const [rt, str] = l.getAllInfo();
		result += l.repeatString(rt, str);
	}
	if(count == line_limit){
		console.log(result); 
		rl.close();
	}
});