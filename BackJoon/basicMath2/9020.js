const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n").map(Number);

//골드바흐 파티션이 여러개면 두 소수의 차가 제일 작은것(절대값)
//소수는 2부터 시작이니까 (2,주어진수-2) 부터 시작

function check(num){
    if(num==1){
        return false;
    }
    for(let i=2;i<=Math.floor(Math.sqrt(num));i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}


function findmin(arr){
    let newarr=[]
    let min=Number.MAX_SAFE_INTEGER;
    for(let i=0;i<arr.length;i++){
        let temp = Math.abs(arr[i][0]-arr[i][1]);
        newarr.push(temp);
        if(min>temp){
            min=temp;
        }
    }
    return newarr.indexOf(min);

}

//console.log(findmin([[3,7],[5,5]]));





const testcase = input[0];
const str = input.slice(1,); //[8,10,16]

for(let i=0;i<testcase;i++){
    let arr = new Array();
    let num = str[i]-2;
    for(let j=2;j<=str[i]-2;j++){
        if(check(j)&&check(num)){//첫번째 수와 두번째 수가 둘다 소수일 경우
            arr.push([j,num]);
        }
        num--;
        if(j==num&&str[i]!==4){ //두 숫자가 같아지면 더이상 찾을 필요가 없음.
            break;
        }
    }
    arr.length>1?console.log(arr[findmin(arr)][0],arr[findmin(arr)][1]):console.log(arr[0][0],arr[0][1]);
}















