const str = "";

class HuffmanQueue{
    constructor(sortedList){
        const queue = {
            count : 0, // 빈도수 값
            root:null // 노드의 root
        };

        this.getLength = ()=>{ // 빈도수를 구하는 메소드
            return queue.count;
        }

        this.enqueue = (obj)=>{
            if(queue.root==null){ //최상위 노드(rootnode)일때
                obj.link=null;//삽입한 값의 link를 null로 변환
                queue.root = obj //최초 삽입값이므로 root가 되야함
            }
            else{ 
                let link = queue.root;
                while((link.link!==null)&&(obj.frequency>link.frequency)){
                    link = link.link;
                }
                obj.link = link.link;
                link.link=obj;
            }
            queue.count++
            return true;
        }
    }
}