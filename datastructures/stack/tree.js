class Node{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

class BST{
    constructor(){
        this.root=null;
    }


    //데이터 삽입
    add(data){
        const node = this.root;
        if(node===null){//root node가 없는 첫번째 노드일경우
            this.root = new Node(data);
            return;
        }else{
            const searchTree = (node)=>{
                if(data<node.data){//들어온 데이터가 rootnode의 데이터보다 작을 경우
                    if(node.left===null){//왼쪽 child node가 비어있을 경우
                        node.left=new Node(data);
                        return;
                    }else if(node.left!==null){//왼쪽 childnode가 있을 경우
                        return searchTree(node.left);//해당 childnode를 기준으로 searchTree함수 재귀로 실행
                    }
                }
                else if(data>node.data){//들어온 데이터가 클 경우
                    if(node.right===null){
                        node.right=new Node(data);
                    }else if(node.right!==null){
                        return searchTree(node.right);
                    }
                }
                else{
                    return null;
                }
            }

            return searchTree(node);//함수정의 후 함수 실행
        }
    }

    remove(data){
        const removeNode=(node,data)=>{
            if(node==null){
                return null;
            }
            if(data==node.data){//삭제하려는 데이터와 일치할 경우
                if(node.left==null&&node.right==null){//가장 최하단의 노드일경우
                    return null;
                }
                if(node.left==null){//좌측 노드가 없는 경우 
                    return node.right; //우측 노드 리턴
                }
                if(node.right==null){//우측 노드가 없는 경우
                    return node.left;//좌측 노드 리턴
                }

                //여기서부터 삭제하려는 노드가 양쪽 모두 자식을 가지고 있는 경우다
                var tempNode = node.right;//삭제하려는 노드의 우측 노드를 tmp에넣음
                while(tempNode.left!==null){//삭제하려는 노드의 우측 노드가 좌측 노드를 가지고있을경우(작은노드)
                    tempNode = tempNode.left;//해당 노드를 tempNode에 넣어준다.
                }
                //while문 탈출 후(더이상 leftNode가 없을경우(최하단))
                node.data = tempNode.data;
                node.right=removeNode(node.right,tempNode.data);
                return node;
            }else if(data<node.data){
                node.left=removeNode(node.left,data);
                return node;
            }else{
                node.right=removeNode(node.left,data);
                return node;
            }
        }
        this.root = removeNode(this.root,data);
    }
    


}