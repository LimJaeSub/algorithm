function solution(n,lost,reserve){
    //reserve들은 lost에 포함되어도 무조건 체육복을 입을 수 있다.
    //lost에 있는 reserve는 체육복을 빌려줄 수 없다.
    lost.sort();
    reserve.sort();
    //1.reserve에서 lost 서로 중복되는 값 삭제하기
    let temp_reserve = reserve.filter((it)=>!lost.includes(it));
    let temp_lost = lost.filter((it)=>!reserve.includes(it)); 
    //temp_ 배열에 각각 reserve<->lost 중복되는 값들을 서로 지워준다.
    reserve=temp_reserve;
    lost=temp_lost;



    //2.reserve와 lost를 비교해서 lost에서 첨삭 가능한 부분 삭제
    for(var i=0;i<reserve.length;i++){
        for(var j=0;j<lost.length;j++){
            if(reserve[i]-1==lost[j]){ //왼쪽 친구 빌려줬을때
                reserve.splice(i,1); //해당 reserve의 요소를 삭제(더이상 못빌려 주므로)
                lost.splice(j,1) // 해당 lost의 요소를 삭제(체육복을 얻었으므로)
                i--;//배열을 slice했으니 다시 탐색하기위해 빼줌
            }
            else if(reserve[i]+1==lost[j]){ //오른쪽 친구 빌려줬을때
                reserve.splice(i,1);
                lost.splice(j,1);
                i--;
            }
        }
    }
    return n-lost.length; // 위 for문을 실행하면 체육복을 빌리지 못한 인덱스만 남는다 따라서, 총 사람 명수에서 빌리지 못한 수를 리턴
}