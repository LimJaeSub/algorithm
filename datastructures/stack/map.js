// let map = new Map();

// map.set(1,'one');
// map.set(2,'two');
// map.set(3,'three');
// map.set('number1',1);
// map.set('number2',2);
// map.set('number3',3);

// console.log(map);
// console.log(map.size);
// console.log(`key "number2"'s value is ${map.get('number2')}`);
// console.log(`is key number3? : ${map.has('number3')} `);
// console.log(`is key number4? : ${map.has('number4')} `);
// map.delete(3);
// console.log(map);
// map.clear();
// console.log(map);

// set : key/value를 이용해 map에 값을 저장
// size : map의 크기를 반환
// get : key에 해당하는 값을 반환, 없으면 undefined
// has : key가 존재하면 true/ 없으면 false
// delete : value,key에 해당하는 값을 삭제
// clear : map 안의 모든 요소 삭제

let map2 = new Map(["egg", 500], ["banana", 300], ["apple", 700]); // 위와 같은 형태로 선언 가능

console.log(map2);
const testobj = map2.keys();
console.log(testobj.next().value);
