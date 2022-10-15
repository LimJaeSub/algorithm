let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ').map(Number);


let answer=Math.min(...input);
console.log(answer);