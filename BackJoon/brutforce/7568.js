const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");


const num = parseInt(input[0]);
const arr = input.slice(1);

let score=[]

for(let i=0;i<arr.length;i++){
    arr[i]=arr[i].split(" ").map(Number);
}

for(let i=0;i<num;i++){
    let count = 1;
    for(let j=0;j<num;j++){
        if(i!==j){
            if((arr[i][0]<arr[j][0])&&(arr[i][1]<arr[j][1])){
                count++;
            }
        }

    }
    score.push(count++);
}

console.log(...score);



// if(arr[i][0]>arr[j][0]){ //몸무게가 클경우 키가 크거나 같으면 등수변경,아니면 수정x
//     if(arr[i][1]>=arr[j][1]){
//         console.log("case1");
//         score[j]++;
//     }
// }
// if(arr[i][0]==arr[j][0]){ //몸무게가 같을경우 키가 크면 등수변경
//     if(arr[i][1]>arr[j][1]){
//         console.log("case2");
//         score[j]++;
//     }
// }
// if(arr[i][0]<arr[j][0]){ //몸무게가 작을경우 키가 커야 수정x 작거나 같으면 비교대상의 등수가 변경
//     if(arr[i][1]<=arr[j][1]){
//         console.log("case3");
//         score[i]++;
//     }
// }


