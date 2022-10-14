let fs = require("fs");
let input = fs.readFileSync("input.txt").toString("utf-8");

let answer="";
for(let i=0;i<input.length;i++){
    if(input.indexOf(input[i])===i){
        answer+=input[i];
    }
    //자기의 위치가 최초의 인덱스번호
    //첫번째로 발견된 것
}
console.log(answer);