const fs = require('fs');
const input = fs.readFileSync("dev/stdin").toString().trim();


const checknum = (a,b)=>{
    return a==b?true:false;
}

const newnum = (a)=>{
    var b = parseInt(a/10)+(a%10);
    return ((a%10)*10)+(b%10);
}

let num = Number(input);
const realnum = num;
let count = 0;


do{
    var num2=newnum(num);
    count++;
    if(checknum(realnum,num2)==true){
        break;
    }
    else{
        num=num2;
    }
}while(true)

console.log(count);
