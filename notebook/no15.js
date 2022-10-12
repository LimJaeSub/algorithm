let fs = require("fs");
let input = fs.readFileSync("input.txt").toString("utf-8");

const strnum = input.length;

if(strnum%2>0){
    //홀수
    console.log(input[Math.floor(strnum/2)]);
}
else{
    //짝수
    console.log(input[(strnum/2)-1],input[(strnum/2)]);
}
