function MD(p,i,j)
{
    if (i==j){ //i=j가 같으면 0을 리턴해야 함
        return 0;
    }
       
    var min=Number.MAX_VALUE;
    var k=0;


    for (k=i;k<j;k++)
    {
        var count = MD(p,i,k)+ MD(p,k+1,j)+ p[i-1]*p[k]*p[j];
 
        if (count<min)//최소값을 찾았으면 바꿔줌
            min=count;
    }
 
    
    return min;//최소값 반환
}
 
// Driver code
var arr = [ 1, 2, 3, 4, 3 ]; //차원의 열
var n = arr.length;//행렬의 갯수
 
console.log("최소값"+ MD(arr,1,n-1));
    