class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    enqueue(newvalue){
        const newNode = new Node(newvalue);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    peek(){
        return this.head.value;
    }
}


function solution(properties,location){
    const que = new Queue();
    for(let i=0;i<properties.length;i++){
        que.enqueue([properties[i],i]);
    }// 큐에 input 배열 모두 넣어줌(우선순위,인덱스)

    properties.sort((a,b)=>b-a);

    let count=0;

    while(true){
        const curValue = que.peek();
        if(curValue[0]<properties[count]){
            // 큐 맨앞에 있는 우선순위가 현재 프린트할 순위보다 낮은경우
            // 다음에 인쇄해야한다.
            que.enqueue(que.dequeue());
        }
        else{
            // 큐 맨앞에 있는 우선순위가 현재 프린트할 순위보다 큰 경우
            // 인쇄해야한다.
            const value = que.dequeue();
            count++;
            if(location==value[1]){
                // 만약 인쇄한 문서의 초기 위치가 문제로 주어진 locaiton와 같다면?
                return count;
                //뽑은 수의 count return
                //return 시 while문 종료
            }
        }
    }

    return count;
}