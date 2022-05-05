function bubbleSort(array){
    for(var i=0;i<array.length;i++){
        let temp;
        for(var j=0;j<array.length-1-i;j++){
            if(array[j]>array[j+1]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return array;
}

function selectionSort(array){
    let temp;
    for(var i=0;i<array.length-1;i++){
        let min = i;
        for(var j=i+1;j<array.length;j++){
            if(array[min]>array[j]){
                min=j
            }
        }
        temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return array;
};

function quickSort (array) {
    if (array.length < 2) {
        return array;
    }
    const pivot = [array[0]];
    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } 
        else if (array[i] > pivot) {
            right.push(array[i]);
        } 
        else {
            pivot.push(array[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}


var num = 15615435135843513;
//정렬된 배열
var Sortarray = new Array();

for(var i=0;i<32;i++){
    Sortarray[i]=i;
}
console.log(Sortarray);

//랜덤 배열
var randomArray= new Array();
for(var i=0;i<num;i++){
    randomNum = Math.floor(Math.random()*num);
    if(randomArray.indexOf(randomNum)==-1){
        randomArray.push(randomNum);
    }
    else{
        i--;
    }
}
console.log("before :"+randomArray);


let start = new Date().getTime();
selectionSort(randomArray);
let end = new Date().getTime();

console.log(end-start);
console.log("after : "+randomArray)


    