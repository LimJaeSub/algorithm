const checknum = (a,b)=>{
    return a==b?true:false;
}

const newnum = (a)=>{
    var b = parseInt(a/10)+(a%10);
    console.log("newnumfun:"+b);
    return ((a%10)*10)+(b%10);
    
}


let num = 26;
const correctnum = num;
let count = 0;


do{
    var num2=newnum(num);
    count++;
    console.log("1:"+num);
    console.log("2:"+num2);
    if(checknum(correctnum,num2)==true){
        break;
    }
    else{
        num=num2;
    }
}while(count<10)


