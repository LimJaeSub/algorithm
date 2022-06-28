const fs = require('fs');
const input = fs.readFileSync("dev/stdin").toString().trim();

const inputArr = input.split("\n");// 입력값 칸띄어쓰기로 


for(var i=1;i<inputArr.length;i++){
    var score = inputArr[i].split(" ");
    var sum=0;
    var count=0;
    for(var j=1;j<score.length;j++){ //총합
        sum=sum+parseInt(score[j]);
    }
    var avg = sum/score[0];//각 줄의 평균

    for(var j=1;j<score.length;j++){ //평균을 넘는 학생들의 명수
        if(score[j]>avg){
            count++;
        }
    }


    console.log((((count/score[0])*100).toFixed(3))+"%");
    
}
