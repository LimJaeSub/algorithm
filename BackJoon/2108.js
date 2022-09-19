// 산술평균 : N개의 수들의 합을 N으로 나눈 값
// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
// 범위 : N개의 수들 중 최댓값과 최솟값의 차이

const fs = require('fs');
const input = fs.readFileSync("BackJoon/test.txt").toString().trim().split('\n').map(Number);

//const numcount = input[0];
input.shift();
const numarr = input;
let center = 0;
let sum = 0;
let countArrindex = 0;
const countArr = [];


// function incountarr(prev,current,countArrindex){
//     //console.log(countArrindex);
//     console.log(countArrindex);
//     if(prev==undefined){//맨처음값만 들어왔을떄
//         console.log("first");
//         countArr[countArrindex]++;
//         console.log(countArr[countArrindex]);  
//     }
//     else{
//         if(prev==current){
//             console.log("comeon");
//             countArr[countArrindex]++;
//             console.log(countArr[countArrindex]);
//         }
//         else{
//             console.log("byebye");
//             countArrindex+=1;
//             countArr[countArrindex]++;
//             console.log(countArr[countArrindex]);
//         }
//     }
    
// }

const getMode = (arr)=>{
      /**
   * 1. 배열들을 순회하면서 해당하는 value들을 키값, count를 value로 하는 Object를 만든다.
   * 2. 만들어진 Object에 있는 value들을 확인하며 최대값을 확인한다.
   */
  const newObject = {};
  arr.forEach((item) => {
    if (newObject[item]) {
      newObject[item] += 1;
    } else {
      newObject[item] = 1;
    }
  });

  /*
  만들어진 새로운 newObject에서 첫번째 값을 최빈값으로 설정해두고
  Object.keys로 순회하면서 더 큰 value를 가진 값이 있으면 mode를 바꾸어 준다.
  */
  let mode = newObject[Object.keys(newObject)[0]];
  let modeKey = Object.keys(newObject)[0];

  for (const item in newObject) {
    if (newObject[item] > mode) {
      mode = newObject[item];
      modeKey = Object.keys(newObject)[mode];
    }
  }
  return modeKey;
}


numarr.sort((a,b)=>{
    return a-b;
});
console.log(numarr);
for(let i=0;i<numarr.length;i++){
    if(i==Math.trunc(numarr.length/2)){
        center = numarr[i];
    }// 중앙값
    sum+=numarr[i];//산술평균
}

const result = getMode(numarr);
console.log("result"+result);

console.log(countArr);