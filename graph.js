// 1. 단순 일차 선형 회귀 직선구하기

const hours = [3,4,5,6,7,8,9,10]; //독립
const marks = [35,50,45,64,66,70,90,85]; //종속

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