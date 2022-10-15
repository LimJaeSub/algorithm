let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ').map(Number);

const [num] = input;

console.log(Math.ceil(num/12));