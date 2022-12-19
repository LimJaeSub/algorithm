let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\n");

const num = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

let max = Number.MIN_SAFE_INTEGER;
let maxindex = 0;
function sumnumber(num){
    let returnnum = 0;
    while(num!=0){
        returnnum = returnnum+num%10;
        num=parseInt(num/10);
    }
    return returnnum;
}
for(let i=0;i<arr.length;i++){
    let comparenum = sumnumber(arr[i]);
    if(comparenum>max){
        max=comparenum;
        maxindex=i;
    }
    else if(comparenum==max){
        if(arr[i]>arr[maxindex]){
            max=comparenum;
            maxindex=i;
        } 
    }
}
console.log(arr[maxindex]);



