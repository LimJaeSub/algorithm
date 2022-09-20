// Stack
// 스택은 LIFO (Last in, First Out) 구조를 가진다.
// js에서 기본적인 push/pop와 같은 경우는 메소드를 이용한다.

// const stack = [];
// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(`push fin ${stack}`);

// stack.pop(); //3
// console.log(`pop3 ${stack}`);
// stack.pop(); //2
// console.log(`pop2 ${stack}`);
// stack.pop(); //1
// console.log(`pop1 ${stack}`);


// Queue
// 큐는 FIFO(First in, First Out) 구조를 가진다.
// 큐 또한 js에서 array로 구현이 가능하다.
// 큐의 주요 메소드 역시 push로 구현한데 pop대신 shift를 쓴다
// 큐는 맨 앞의 요소를 방출하기 때문에 shift를 사용한다.

// const queue=[];

// queue.push(1);
// queue.push(2);
// queue.push(3);

// queue.shift(); //1
// queue.shift(); //2
// queue.shift(); //3

// Linked List
// 포인터가 없는 자바스크립트에서는 객체를 참조하는 방식으로 연결리스트를 구현할 수 있다.
// 보통 웹 브라우저의 history관리를 할 때 사용한다.
// 사이트를 넘어갈 때 이전 사이트의 정보를 가지고 넘어가기 때문에 뒤/앞으로 가기가 가능
// 


const n1={
    data:100
}
const n2={
    data:200
}

n1.next=n2;

console.log(n1);
console.log(n2);


// ==========================
class Node{
    constructor(data,next=null){
        //data와 next를 넣고 next의 기본값을 null로 지정, linkedlist의 마지막의 next는 null이기 때문
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;//처음 데이터가 없다면 head는 null이다.
        this.size=0;
    }

    //맨 앞에 삽입
    insertFirst(data){
        this.head=new Node(data,this.head)
        //헤드에 새로운 노드가 들어가며 next는 기존의 head가 된다.
        this.size++;
    }

    //마지막 삽입
    insertLast(data){
        let node = new Node(data);//마지막 데이터이므로 next의 default값인 null로 된다.

        // 빈 배열일 경우 헤드 생성
        if(!this.head){//head의 값이 없을 경우
            this.head=node;//지금 삽입된 값이 헤드가 됨
        }else{
            current=this.head; //값이 있을 경우 current 변수에 헤드값을 정의해줌

            while(current.next){//current값에 next가 있다면, 즉 next가 null이 아니라면
                current=current.next //current값에 current.next를 넣어준다.
            }// 위 작업을 current.next가 없을 때까지 반복한다, 즉 리스트의 맨 끝까지 반복한다.
            current.next=node; // 결국 마지막노드에 도달했을 때 next를 새로운 노드로 설정해준다.
        }
        this.size++;
    }

    //중간 삽입
    insertAt(data,index){
        if(index<0&&index>this.size){
            return;
        }//인덱스가 노드의 size범위를 넘어서면 아무것도 리턴하지 않음

        //첫번째에 삽입
        if(index===0){
            this.head=new Node(data,this.head)//insertfirst메소드랑 동일
            this.size++;
            return;
        }


        const node=new Node(data);
        let current,previous;

        current=this.head; //current변수에 헤드값 적용(검사값이라 생각하면 됨)
        let count=0;

        while(count<index){
            previous=current;//previous변수에 헤드값이 들어간 current 삽입
            count++;
            current=current.next;//검사값에 다음 검사할 값 넣어줌(next)
        }//위 함수를 입력하려는 인덱스 값 이전까지 해준다.

        node.next=current; //node는 중간에 삽입되므로 다음 검사값을 next에 넣어주고
        previous.next = node;//node의 이전값으로 previous가 설정된다

        this.size++; //리스트가 만들어졌으니 사이즈 증가
    }


    //해당 인덱스의 값을 가져오는 메소드
    getAt(index){
        let currnet = this.head;
        let count=0;

        while(current){ //current.next가 null이 될때까지(끝까지)
            if(count==index){
                console.log(current.data);
            }
            count++;
            current=current.next;
        }
        return null;
    }

    removeAt(index){
        if(index<0&&index>this.size){
            return;
        }

        let current=this.head;
        let previous;
        let count=0;

        //첫 번쨰 인자를 삭제할경우
        if(index===0){
            this.head=current.next;//맨 첫번째 인자를 삭제했으므로 한 칸씩 뒤로 밀림
        }else{
            //첫번째 인자가 아닐경우
            while(count<index){//입력받은 인덱스 번호까지 찾음
                count++;
                previous=current;
                current=current.next;
            }
            previous.next=current.next;//중간값이 삭제 되었으므로 이전값의 다음값은 현재값의 다음값이 된다.
        }
        this.size--;
    }

    
}






