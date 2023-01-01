class Node{
    constructor(value,hit){
        this.value = value;
        this.next=null;
        this.hit = hit;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = null;
    }
    enqueue(newvalue,hit){
        const newNode = new Node(newvalue,hit);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.size++;
    }
    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        //return value;
    }
    headtotail(){
        this.tail.next = this.head;
        this.head = this.head.next;
    }
    peek(){
        return this.head.value;
    }
    isHit(){
        return this.head.hit;
    }
}

function deletemax(arr,max){
    console.log(typeof arr);
    // 배열에 값이 있으면
    // 그대로 리턴
    if(arr.includes(max)){
        //console.log("hihi");
        return max;
    }
    else{
        let index = arr.indexOf(max);
        arr.splice(index,1);
        //console.log(arr);
        return Math.max(...arr);
    }
    
}

function solution(important, location) {
    // important : 중요도 배열
    // location : 인쇄하려는 것
    const que = new Queue();
    for(let i=0;i<important.length;i++){
        let hit = null;
        if(i==location){
            hit=1;
        }
        que.enqueue(important[i],hit);
    }
    
    let stoploop = true;
    let tmp = important;
    let count=0;
    let max = Math.max(...important);
    while(stoploop){
        if(que.peek()<max){ // head의 중요도가 max보다 작으면
            console.log(max);
            que.headtotail();
        }
        else if(que.peek()==max){ // head의 중요도가 max값이면(무한루프 오류:max값이 바뀌지 않음)
            if(que.isHit()===1){// 찾는 문서면
                console.log("hello");
                count++;
                break;
            }
            //console.log(que.peek());
            max=deletemax(tmp,que.peek());
            //console.log(max);
            que.dequeue();//인쇄
            // TODO : 다음 max값 정의
            // 큐에 동일한 값이 없으면 max-1함
            count++; 
        }
    }
    return count;

}



const arr = [1,1,9,1,1,1];
const loc = 0;
console.log(solution(arr,loc));






