const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const havenum = parseInt(input.shift());
const havearr = input.shift().split(" ").map(Number);
const checknum = parseInt(input.shift());
let checkarr = input.shift().split(" ").map(Number);


for(let i=0;i<checknum;i++){
    for(let j=0;j<havenum;j++){
        //console.log(checkarr[i],havearr[j]);
        if(checkarr[i]==havearr[j]){
            checkarr[i]=1;
            break;
        }
        if(j==havenum-1){
            checkarr[i]=0;
        }
    }
}

console.log(checkarr);

