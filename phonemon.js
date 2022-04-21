function solution(nums){
    nums.sort();
    // 선택할 수 있는 종류 갯수를 return
    let resultarraylength = nums.length/2; //결과배열의 길이 정하기(가능)


    const set = new Set(nums); // 배열에서 중복을 제외한 값들(종류)
    setarr = Array.from(set); //set to array
    
    const resultarr = new Array();
    
    setarr.sort();
    
    if(setarr.length<=resultarraylength){ //종류의 갯수가 결과값보다 적거나 같을경우
        return setarr.length;
    }
    else if(setarr.length>resultarraylength){ //종류의 갯수가 결과값보다 많을경우
        for(var i=0;i<resultarraylength;i++){
            resultarr[i]=setarr[i];
        }
        return resultarr.length;
    }
}