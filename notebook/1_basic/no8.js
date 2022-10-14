let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ').map(Number);

sum = input.reduce((acc,cur)=>{
    return acc+cur;
},0)

let resultarr;

for(var i=0;i<input.length;i++){
    for(var j=i+1;j<input.length;j++){
        if(sum-(input[i]+input[j])===100){
            resultarr = input.filter((it)=>(it!==input[i])&&(it!==input[j]));
            console.log(resultarr);
        }
    }
}