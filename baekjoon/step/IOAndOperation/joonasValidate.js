// 문제 링크 https://www.acmicpc.net/problem/10926

const readline = require('readline');
const {stdin:input, stdout:output} = require('process');
const rl = readline.createInterface({input, output });

(function(){
	rl.on('line', function(line){
		const name = line;
		const surprised = '??!'
		let result = name + surprised;
        console.log(result)
		rl.close();
	})
})()