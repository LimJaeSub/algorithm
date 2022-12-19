const s = "())(()";

function solution(s){
    if(s[0]===')' || s.at(-1)==='('){
        return false;
    }
    let count = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            count++;
        }
        else if(s[i]===")"){
            if(count==0){
                return false;
            }
            count--;
        }
    }
    if(count!=0){
        return false;
    }
    return true;
}

console.log(solution(s));