const arr1 = new Array(5).fill(5);
const arr2 = Array.from(Array(5), function(value,index){
    return index*2;
})

const arr3 =[1,2,3,4,5];

// join
// console.log(arr3.join(','));

//reverse
const arr4 = arr3.reverse();
//console.log(arr4); // 5,4,3,2,1
//console.log(arr3); // reverse는 기존 배열에 영양을 끼침 (5,4,3,2,1)

const arr5=[1,2,3,4,5];
const arr6=[6,7,8,9,10];

//concat
//console.log(arr5.concat(arr6));


//push,pop
// const arr7 = [1,2,3,4,5];
// arr7.push(6);
// console.log(arr7);
// arr7.pop();
// console.log(arr7);

//shift,unshift
// const arr8=[1,2,3,4,5];
// console.log(arr8.shift());
// console.log(arr8);
// arr8.unshift(1);
// console.log(arr8);


//slice
//const arr9