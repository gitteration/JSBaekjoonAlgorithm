// 문제 링크 https://www.acmicpc.net/problem/4344

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

function Info(){
	this.score = [];
	this.number_of_students = [];
	this.line_limit = 0;
}
Info.prototype.setLineLimit = function(line) {
	this.line_limit = line;
}
Info.prototype.getLineLimit = function(){
	return this.line_limit;
}
Info.prototype.setScore = function(line){
	this.score.push(line);
}
Info.prototype.getFullScore = function(){
	return this.score;
}
Info.prototype.getScore = function(index){
	return this.score[index]
}
Info.prototype.getScoreLength = function(){
	return this.score.length;
}
Info.prototype.setNumberOfStudents = function(line){
	this.number_of_students.push(line);
}
Info.prototype.getNumberOfStudents = function(index){
	return this.number_of_students[index];
}
Info.prototype.sum = function(acc, curr){
	return acc + curr;
}
Info.prototype.average = function(){
	return 
}
const info = new Info();

rl.on('line', (line) => {
	let line_limit = info.getLineLimit();
	if(line_limit === 0){
		info.setLineLimit(Number(line));
	}else{
		line = line.trim().split(' ').map(num => Number(num));
		info.setNumberOfStudents(line[0]);
		line.shift(); 
		info.setScore(line);
		let score_length = info.getScoreLength();
		line_limit === score_length ? rl.close() : undefined;
	}
}).on('close', ()=> {
	let result = '';
	let scores = info.getFullScore();
	for(let index in scores){
		let score = info.getScore(index);
		let number_of_students = info.getNumberOfStudents(index);
		let sum = score.reduce(info.sum, 0);
		let score_average = parseFloat((sum / number_of_students));
		let average = 0;
		let count = 0;
		for(let element of score){
			if(element > score_average){
				count ++;
			} 
		}
		average = ((count / number_of_students) * 100).toFixed(3);
		result += `${average}%\n`;
	}
	console.log(result);
});
