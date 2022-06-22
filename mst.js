function weightgraph(vertex, edge){
    var resultArr = new Array();
    let graph = Array.from(Array(vertex), () => Array(edge).fill(0));
    let input = [
        [1, 2, 2], 
        [1, 4, 10], 
        [1, 3, 3], 
        [2, 7, 7], 
        [2, 3, 3],
        [3, 5, 6],
        [3, 6, 3],
        [3, 7, 4],
        [4, 5, 1],
        [5, 6, 23],
        [6, 7, 9]  ];

    for (let [a, b, c] of input){
      graph[a][b] = c;
    }
    for(i=0;i<edge;i++){
        graph[0][i]=i
    }
    for(j=0;j<vertex;j++){
        graph[j][0]=j
    }

    
    return graph;
}
//그래프 만든 후
//최소 간선값 구하고 해당 배열에 99값넣어줌
//99값 넣은 상태로 다시 탐색?
//간선의 최소값 구한 후 prev,next값이 전부 같은것 pass
function findmin(graph,vertex,edge){
    var min=99;
    var i;
    var j;
    for(i=1;i<vertex;i++){
       for(j=1;j<edge;j++){
           if(graph[i][j]!=0){
               temp=graph[i][j];
               if(temp<min){
                   min=temp;
               }
           }
       }
    }
    return min;
}


let vertex = 7;
let edge = 10;
let resultgraph = weightgraph(vertex,edge);

var minArray = new Array();
console.log(resultgraph);
console.log(findmin(resultgraph,vertex,edge));
minArray




 
 


