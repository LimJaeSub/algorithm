const fs = require('fs');
const input = fs.readFileSync("BackJoon/test.txt").toString().trim();

const a = input.split("\n");
let heightresult,widthresult;

for(var i=1;i<=a[0];i++){
    const question = a[i].split(" ");
    const height = parseInt(question[0]);
    const people = parseInt(question[2]);
    widthresult = parseInt((people/height));
    if(people>height){ 
        people%height==0 // 꼭대기까지 다 채울때
        ?[heightresult=height]
        :[heightresult=people%height,widthresult++];
    }
    else if(people==height){
        heightresult=people;
    }
    else if (people<height){
        heightresult=people;
        widthresult=1;
    }

   
    console.log(heightresult+(widthresult<10?`0${widthresult}`:`${widthresult}`));
}

