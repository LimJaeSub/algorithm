// forEach / map / filter / reduce

const numbers = [5,4,3,2,1];
// forEach


// numbers.forEach((num,index,array)=>{
//     console.log(num);
//     console.log(index);
//     console.log(array.length);
// })

// num : 처리할 요소
// index : 처리할 요소의 인덱스
// array : forEach 메서드를 호출한 배열


// Reduce
// 배열.reduce((누적값,현재값,인덱스,요소)=>{return 결과},초깃값)
result = numbers.reduce((acc,cur,i)=>{
    console.log(acc,cur,i);
    return acc+1;
},1)

//초기값을 적어주지 않으면 자동으로 초깃값이 0번째 인덱스의 값이 됨
//reduceRight를 사용하면 오른쪽에서 왼쪽으로 순회

// https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d



