let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const game = parseInt(input[0]);
// const num = parseInt(input[0]);
for(let i=0;i<input.length;i++){
    if(i>0){
        input[i]=input[i].split(" ").map(Number);
    }
}
// 1:가위 2:바위 3:보 /이긴사람 출력/비기면 D

// 두 수의 차의 절대값이 1이면 큰사람이 이긴거임
// 절대값이 2면 작은사람이 이겼음
function rsp(a,b){
    const abs = Math.abs(a-b);
    switch(abs){
        case 1:
            if(a<b){
                console.log("B");
                break;
            }
            if(a>b){
                console.log("A");
                break;
            }
        case 2:
            if(a>b){
                console.log("B");
                break;
            }
            if(a<b){
                console.log("A");
                break;
            }
        case 0:
            console.log("D");
            break;
        default:
            break;
    }
}
for(let i=0;i<game;i++){
    rsp(input[1][i],input[2][i]);
}
