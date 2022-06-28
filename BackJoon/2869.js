const fs = require('fs');
const input = fs.readFileSync("BackJoon/test.txt").toString().trim().split(" ");

const [up,down,tree] = [parseInt(input[0]),parseInt(input[1]),parseInt(input[2])];

let now = 0;
let day = 0;
do{
    if(now>down){
        now=now-down;
        now=now+up;
    }
}while(now<tree)