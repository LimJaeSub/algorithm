let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const num = parseInt(input[0]);
const str = input.slice(1,);
let tempstr="";

for(var i=0;i<num;i++){
    if(str[i].length>tempstr.length){
        tempstr=str[i];
    }
}

console.log(tempstr);


