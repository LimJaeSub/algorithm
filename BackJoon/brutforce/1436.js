const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const num = parseInt(input);
let start = 665;


for(let i=0;i<num;start++){
    if(start.toString().includes('666')){
        i++;
    }
}

console.log(start-1);
// const str = (6744).toString();
// console.log(str.includes('44'));