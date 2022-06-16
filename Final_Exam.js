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
function RandomCandidate(){ 
    for(var i=0;i<4;i++){
        let isInput = true;
        const randomnum = Math.floor(Math.random()*30)+1;
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



// ==========================================================



//후보해 랜덤 생성
RandomCandidate();
//적합도 계산
ACadjust(candidatenum);



//적합도 총 합
const accSum = accuracy.reduce(function add(sum,currValue){
    return sum+currValue;
}) 



//원반 면적 계산
CalculateArea(accSum,accuracy);



// 면적의 총합 계산
const accAreSum = accuracyArea.reduce(function add(sum,currValue){
    return sum+currValue;
}) 

console.log(candidatenum);
console.log(accuracy);//적합도
console.log(accuracyArea);//면적
console.log("면적 총합:"+accAreSum);


// 면적도가 높은 두 가지를 골라서 그 사이의 랜덤한 값을 추출한다.

function extraction(arr){
    for(var i=0;i<arr.length;i++){
        let temp;
        
    }
}



