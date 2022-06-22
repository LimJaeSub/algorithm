var water = [7,5,6,4,2,3,7,5];
var bottleVolume= 10;
var bottle = new Array(50);
var bottleCounter = 0;
bottle.fill(0);

for(var i=0;i<water.length;i++){
    //first_fit(water[i]);
    next_fit(water[i]);
}


for(var i=0;i<bottle.length;i++){
    if(bottle[i]!=0){
        bottleCounter++;
    }
}
console.log("How many bottle :"+bottleCounter);


function first_fit(water){
    for(var j=0;j<bottle.length;j++){
        if(bottle[j]+water<bottleVolume){ //용량이 충분할 경우
            bottle[j]+=water; //물 채워줌
            break;
        }
        else{
        }
    }
}
 

function next_fit(water){
    for(var j=0;j<bottle.length;j++){
        if(j==0){
            bottle[j]=water;
        }
        else{
            if(bottle[j-1]+water<bottleVolume){
                bottle[j-1]+=water;
                break;
            }
        }
    }
}

function best_fit(water){
    for(var j=0;j<bottle.length;j++){
        
    }
}