// 스택은 LIFO (Last in, First Out) 구조를 가진다.
// js에서 기본적인 push/pop와 같은 경우는 메소드를 이용한다.

const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);

console.log(`push fin ${stack}`);

stack.pop(); //3
console.log(`pop3 ${stack}`);
stack.pop(); //2
console.log(`pop2 ${stack}`);
stack.pop(); //1
console.log(`pop1 ${stack}`);
