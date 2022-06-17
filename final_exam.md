최적화 알고리즘을 구현하기 전에 회귀분석에 대해 먼저 작성하겠다.

회귀분석은 어떤 변수들이 한 변수의 원인이 되는지 분석하는 방법이다.

데이터 셋과 x에대한 y값의 차이의 절대값이 적을수록 오류가 적은 회귀식이다.

| 시간 | 성적 |
| ---- | ---- |
| 3    | 35   |
| 4    | 50   |
| 5    | 45   |
| 6    | 64   |
| 7    | 66   |
| 8    | 70   |

위 데이터로 chart.js를 이용해 dot 그래프를 그렸다.

```
var context = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(context, {
    type: 'bubble', // 차트의 형태
    data: { // 차트에 들어갈 데이터
        datasets: [
            { //데이터
                label: 'Spot', //차트 제목
                data: [
                {
                    x:3,
                    y:35,
                    r:10
                },
                {
                    x:4,
                    y:50,
                    r:10
                },
                {
                    x:5,
                    y:45,
                    r:10
                },
                {
                    x:6,
                    y:64,
                    r:10
                },
                {
                    x:7,
                    y:66,
                    r:10
                },
                {
                    x:8,
                    y:70,
                    r:10
                },
                {
                    x:9,
                    y:90,
                    r:10
                },
                {
                    x:10,
                    y:85,
                    r:10
                },
            ],
                backgroundColor:'rgb(255,99,132)'
            }
        ]
    },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }
);
```

[##_Image|kage@boBQhj/btrEGKrFn7t/yD00yYynOHjbv680W3k64k/img.png|CDM|1.3|{"originWidth":942,"originHeight":939,"style":"alignCenter"}_##]

선형회귀는 일차 직선방정식 y=mx+b를 사용한다

x=독립변수

m=기울기

b=y절편

y=종속변수

위 방정식 기준으로 최소제곱법의 기울기 m의 공식은

[##_Image|kage@bsTeQV/btrEJvUiMMs/HSCsTPQptV0cRJC9yhK5c0/img.png|CDM|1.3|{"originWidth":297,"originHeight":162,"style":"alignCenter","caption":"최소제곱법 기울기 공식"}_##]

| Hours | Marks | xi-x   | yi-y      | (xi-x)(yi-y) | (x1-x)^2 |
| ----- | ----- | ------ | --------- | ------------ | -------- |
| x     | y     | xi-6.5 | yi-63.125 |              |          |
| 3     | 35    | \-3.5  | \-28.125  | 98.4375      | 12.25    |
| 4     | 50    | \-2.5  | \-13.125  | 32.8125      | 6.25     |
| 5     | 45    | \-1.5  | \-18.125  | 27.1875      | 2.25     |
| 6     | 64    | \-0.5  | 0.875     | \-0.4375     | 0.25     |
| 7     | 66    | 0.5    | 2.875     | 1.4375       | 0.25     |
| 8     | 70    | 1.5    | 6.875     | 10.3125      | 2.25     |

최소제곱법 공식에 의하여

기울기 : 6.914

y절편 : 16.973

이 된다.

따라서 선형그래프는 f(x) = 6.914x+16.973 이 된다.

이 방정식으로 유전 알고리즘을 구현해보겠다.

```
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
```

[##_Image|kage@U5xp3/btrE294HKhI/hGuxocaEpUzFcizzrXIiRK/img.png|CDM|1.3|{"originWidth":369,"originHeight":67,"style":"alignCenter","caption":"전역변수"}_##]

각 주석에 쓰인 내용들을 넣을 전역변수다

[##_Image|kage@JOzmw/btrE1XDI0PD/9ckRp6Jrfq5rwUH5hQen01/img.png|CDM|1.3|{"originWidth":497,"originHeight":428,"style":"alignCenter"}_##]

초기 후보해를 생성해주는 함수다.

후보해의 중복을 막기 위해 중복을 제거하는 기능을 넣어주었다.

[##_Image|kage@bnkWUK/btrEZdtAeyz/sKlml1jSQ84JuzbxsyLEQk/img.png|CDM|1.3|{"originWidth":759,"originHeight":177,"style":"alignCenter"}_##]

역수를 취해 리턴값이 적을수록 적합도가 높은 것으로 만들었다.

[##_Image|kage@OeGow/btrE3L212hK/Ft0Ve7u6yk1kW3gC51Czvk/img.png|CDM|1.3|{"originWidth":386,"originHeight":292,"style":"alignCenter"}_##]

원반의 면적을 계산하고 면적에 따라 새로운 후보해를 추출하기 위해 최대/최소를 추출하는 함수다.

[##_Image|kage@HoXx2/btrE3HNdkBU/SlDbHvCYkJdCpgkJHRvnt0/img.png|CDM|1.3|{"originWidth":569,"originHeight":506,"style":"alignCenter"}_##]

main의 재귀를 통해 후보해의 범위를 재정의하여 정확도를 높이는 방법을 사용하였다.
