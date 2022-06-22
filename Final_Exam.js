// 1.초기 염색체 생성
// 2.적합도 평가
// 3.교차 및 돌연변이
// 4.다음 세대 적합도 평가
// f(x) = 6.914x + 16.973 <<가장 최고의 함수
// 위 함수를 통해 자연수의 시간 중 100점과 가장 근접한 최적해를 뽑아내야함

// 초기 유전자
// 랜덤으로 4개를 뽑아서 적합도를 계산한다.


const candidatenum = new Array(); //후보해 배열
const accuracy = new Array(); //적합도 배열
const accuracyArea = new Array(); // 원반 면적


// 함수
function line_function(x){
    return 6.914*x+16.973;
} 


// 초기 후보해 생성
function RandomCandidate(min,max){ 
    for(var i=0;i<4;i++){
        let isInput = true;
        const randomnum = Math.floor(Math.random()*max)+min;
        for(var j=0;j<4;j++){
            if(randomnum==candidatenum[j]){
                i--;
                isInput=!isInput
                break;
            }
        }
        if(isInput){
            candidatenum[i] = randomnum;
        }
        else if(!isInput){
            continue
        }
    }

    return candidatenum;
}
// 적합도 계산
function ACadjust(arr){
    for(var i=0;i<arr.length;i++){
        accuracy[i]=1/Math.abs(100-line_function(arr[i]));
        //f(x)값의 목표가 100이므로 100-적합도의 절대값이 낮은 해일수록 우수한 해임.
        //룰렛 휠은 우월한 유전자를 가질수록 선택될 확률(적합도)가 높아야하므로 1/n으로 역수를 취해줬음.
    }

    return accuracy;
}

// 원반 면적 계산
function CalculateArea(accSum,accuracy){
    for(var i=0;i<accuracy.length;i++){
        accuracyArea[i]=(accuracy[i]/accSum)*100
    }

    return accuracyArea;
}


//최대 최소
function extraction(arr){
    arr.sort((a,b)=>a-b);
    return [arr[0],arr[1]];  
}



function main(min,max){
    RandomCandidate(min,max); //후보해 생성
    ACadjust(candidatenum); //적합도 계산

    const accSum = accuracy.reduce(function add(sum,currValue){
        return sum+currValue;
    }) //적합도 총합

    CalculateArea(accSum,accuracy); //원반 면적 계산

    const accAreSum = accuracyArea.reduce(function add(sum,currValue){
        return sum+currValue;
    }) //면적의 총합

    const newmin = extraction(accuracy)[0]; 
    const newmax = extraction(accuracy)[1];//후보해 재생성

    if((extraction(accuracyArea)||extraction(accuracyArea))>99){
        return 1;
    }
    else{
        main(newmin,newmax);
    }


}



