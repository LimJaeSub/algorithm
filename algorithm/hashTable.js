// 1. 가장 많이 재생된 장르 
// 2. 장르 안에서 많은 순서대로

let musicmap = new Map();

function getKeyByValue(obj, value){
    return Object.keys(obj).find(key => obj[key][1] == value);
}
function solution(genres, plays){
    for(let i=0;i<genres.length;i++){
        if(musicmap.has(genres[i])){ // map에 현재 인덱스의 장르가 있는 경우(value값도 있다.)
            let tmp = musicmap.get(genres[i]); // 해당 키의 value값 리턴
            tmp.push([plays[i],i]); // value값에 새로운 값 넣음
            musicmap.set(genres[i],tmp); // 새로운 값을 다시 map에 set
        }
        else{ // map에 현재 인덱스의 장르가 없는 경우.(첫 장르임)
            musicmap.set(genres[i],[[plays[i],i]]); // value값을 배열로 해줘야 후에 if-true문에서 타입이 맞음.
        }
    }
    const keys = Array.from(musicmap.keys()); // 키값만 딴 배열
    let sumarray = new Array();
    
    for(let i=0;i<keys.length;i++){ // 이 순환for문에서 구해야 할 것 : 각 장르의 합과 각 장르별로 큰 숫자대로 2개
        let secondarr = musicmap.get(keys[i]);
        secondarr.sort((a,b)=>b[0]-a[0]);//배열 sort해줌
        musicmap.delete(keys[i]);
        let sum = secondarr.reduce((a,b)=>{// 배열 합 구함
            return a+b[0];
        },0);
        sumarray.push(sum);
        musicmap.set(keys[i],[secondarr,sum]);
    }
    sumarray.sort((a,b)=>b-a);
    for(let i=0;i<sumarray.length;i++){
        let key = getKeyByValue(musicmap,sumarray[i]);
        //console.log(key); // why undefined?
    }

}

solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]);

// let arr = {'classic':[ [ [ 800, 3 ], [ 500, 0 ], [ 150, 2 ] ], 1450 ],'pop':[[[3,4],[3,4]],3100]}
// let key = getKeyByValue(arr,1450);
// // const tmp = musicmap.get('classic');
// // console.log(tmp[1]===1450);
// console.log(key);

console.log(musicmap);
console.log(musicmap.get('classic'));
console.log(musicmap.get('pop'));

