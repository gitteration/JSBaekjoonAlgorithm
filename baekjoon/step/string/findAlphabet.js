// 문제링크 https://www.acmicpc.net/problem/10809

const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

function Line(){
	let string = '';
	this.getString = () => string;
    this.setString = (str) => {
		string = str;
		rl.close();
	}
}
Line.prototype.parseAlphabet = (str) => {
	let result = '';
	for(let i=97; i<=122; i++){
		let index_of_string = '-1 ';
		for(let j=0; j<str.length; j++){
			const char_code = str[j].charCodeAt();
			if(char_code === i){
				index_of_string = `${j} `;
				break;
			}
		}
		result += index_of_string;
	}
    return result;
}

const l = new Line();
rl.on('line', (line) =>{
		line = String(line.trim());
		l.setString(line);
}).on('close', () => {
	const string = l.getString();
    const result = l.parseAlphabet(string); 
    console.log(`${result}`);
})
