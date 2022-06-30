const fs = require('fs');
const input = fs.readFileSync("BackJoon/test.txt").toString().trim().split(" ");

const [up,down,tree] = [parseInt(input[0]),parseInt(input[1]),parseInt(input[2])];

console.log(Math.ceil((tree-down)/(up-down)));