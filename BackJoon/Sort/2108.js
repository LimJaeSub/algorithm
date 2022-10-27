const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n").map(Number);


// 1.산술평균 : n개의 수들의 합을 n으로 나눈값
// 2.중앙값 : n개의 수들을 증가하는 순서로 나열했을 경우 중앙에 위치하는 값
// 3.최빈값 : 가장 많이 나타나는 값
// 4.범위 : n개의 수들 중 최댓값과 최솟값의 차이

function evg(arr,arrlength){
    let sum = arr.reduce((acc,cur)=>{
        return acc+cur;
    },0);
    if(Math.round(sum/arrlength)===-0){
        return 0;
    }
    return Math.round(sum/arrlength);
}

function center(arr,arrlength){
    arr=arr.sort();
    if(arrlength%2==0){
        return arr[(arrlength/2)-1];
    }
    else{
        return arr[Math.floor(arrlength/2)]
    }
}


function frequency(arr,arrlength){
    let countarr=[];
    for(let i=0;i<arrlength;i++){
        let count=0;
        for(let j=0;j<arrlength;j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }
        countarr.push(count);
    }
    const maxcount = Math.max(...countarr);//가장 높은 카운트 찾아주기
    //console.log(maxcount);
    const maxlocationarr = allfind(countarr,maxcount); // maxcount가 countarr에서 몇번째 인덱스에 있는지 찾아줌
    //console.log(maxlocationarr);
    let secondfrequencyarr = []
    for(let i=0;i<maxlocationarr.length;i++){
        secondfrequencyarr.push(arr[maxlocationarr[i]]);
    }
    //console.log(secondfrequencyarr);
    let testarr = secondfrequencyarr.sort();
    if(secondfrequencyarr[0]===secondfrequencyarr[secondfrequencyarr.length-1]){
        return secondfrequencyarr[0]
    }
    else{
        let returnarr = secondfrequencyarr.filter((it)=>it!==Math.min(...secondfrequencyarr));
        //console.log(returnarr);
        return returnarr[0];
    }
    
}
function allfind(arr,num){
    let returnarr=[]
    let fromindex = arr.indexOf(num);
    while(fromindex !=-1){
        returnarr.push(fromindex);
        fromindex=arr.indexOf(num,fromindex+1);
    }
    return returnarr;
}
function range(arr){
    arr=arr.sort();
    return Math.abs(arr[0]-arr[arr.length-1]);
}


const num = input[0];
const arr = input.slice(1);

console.log(evg(arr,num));
console.log(center(arr,num));
console.log(frequency(arr,num));
console.log(range(arr));



