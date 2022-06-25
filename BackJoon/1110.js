const fs = require('fs');
const input = fs.readFileSync("BackJoon/test.txt").toString().trim();


const checknum = (a,b)=>{
    return a==b?true:false;
}

const newnum = (a)=>{
    var b = parseInt(a/10)+(a%10);
    return ((a%10)*10)+b;
    
}
let num = Number(input);
let count = 0;


do{
    var num2=newnum(num);
    count++;
    if(checknum(num,num2)==true){
        break;
    }
    else{
        num=num2;
    }
}while(true)

console.log(count);
