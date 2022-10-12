let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

let answer;
input = input.replace(/(\r\n|\n|\r)/gm, ",");
const strnum = input[0];
const str = input.split(',').slice(1);


// for(let i=0;i<strnum;i++){
//     if(str.indexOf(str[i])===i){
//         answer=answer+str[i];
//     }
// }

// console.log(answer);

answer = str.filter(it=>{
    for(let i=0;i<str.length;i++){
        //console.log(str.indexOf(str[i]));
        console.log(i);
        if(str.indexOf(str[i])===i){
            return true;
        }
    }
})

console.log(answer);

