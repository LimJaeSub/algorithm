class Node{
    constructor(value){
        this.value=value;
        this.node=null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail=null;
        this.size=null;
    }
    //삽입
    enqueue(newvalue){
        const newNode = new Node(newvalue);
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
    //삭제
    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    peek(){
        return this.head.value;
    }

}








