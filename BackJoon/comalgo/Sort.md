입력 데이터 수 32부터 2의 20승까지인 1048576 개의 표본을

선택정렬,버블정렬,삽입정렬,퀵정렬을 통해 정렬해보겠다.

```
import time
import random

def selectionSort(a,n):
    for i in range(1,n-1):
        minIndex = i
        for j in range(i,n):
            if a[j]<a[minIndex]:
                minIndex=j
        a[minIndex],a[i] = a[i],a[minIndex]
    return a

def bubbleSort(a,n):
    for i in range(n,1,-1):
        for j in range(1,i-1):
            if(a[j]>a[j+1]):
                temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp;

def insertSort(a,n):
    for i in range(2,n):
        a[0]=a[i]
        j=i
        while(a[j-1]>a[0]):
            a[j]=a[j-1]
            j=j-1
        a[j]=a[0]


def quickSort(arr):
    if len(arr) <= 1: return arr

    pivot, tail = arr[0], arr[1:]

    leftSide = [x for x in tail if x <= pivot]
    rightSide = [x for x in tail if x > pivot]

    return quickSort(leftSide) + [pivot] + quickSort(rightSide)



num = 32;




list1 =[]
list1.append(None)
for i in range(num,1,-1):
    list1.append(i)
start1=time.time()
bubbleSort(list1,num);
end1=time.time()
print("time : ",end1-start1);



list2=[random.randint(1,num) for i in range(num)]
start2 = time.time()
bubbleSort(list2,num)
end2 = time.time()
print("time :",end2-start2)



list3 = []
list3.append(None)
for i in range(1,num):
    list3.append(i)
start3=time.time()
bubbleSort(list3,num)
end3=time.time()
print("time :",end3-start3);
```

해당 코드로 각각 정렬된리스트,랜덤리스트,역정렬리스트를 통해 비교하였다.

images.githubusercontent.com/76646095/166944612-cf9e79b7-d901-48f4-84e9-1ccdc6166baf.png)

그러나 너무 작은 표본에서는 시간이 정확히 측정되지 않으며, 너무 높은 숫자인 1048576에서는 측정에 너무 오랜시간이 걸린다.

그래서 각 데이터별로 시간을 측정해 제곱수간의 시간차이를 구하여

측정이 거의 불가능한 표본의 시간을 추정하려고 했다.

<BubbleSort>

| num   | reverseTime | randomTime | sortTime |
| ----- | ----------- | ---------- | -------- |
| 128   | 0.0009      | 0.0009     | 0        |
| 256   | 0.0039      | 0.0019     | 0.0009   |
| 512   | 0.0189      | 0.0129     | 0.0060   |
| 1024  | 0.0728      | 0.0558     | 0.0279   |
| 2048  | 0.3147      | 0.2438     | 0.1513   |
| 4096  | 1.2755      | 0.9800     | 0.4838   |
| 8192  | 5.0866      | 4.0079     | 1.9766   |
| 16384 | 20.6754     | 16.0554    | 7.9043   |
| 32768 | 81.8964     | 64.9883    | 30.9955  |

<selectionSort>

| num   | reverseTime | randomTime | sortTime |
| ----- | ----------- | ---------- | -------- |
| 128   | 0.0         | 0.0009     | 0.0      |
| 256   | 0.0019      | 0.0009     | 0.0009   |
| 512   | 0.0049      | 0.0049     | 0.0059   |
| 1024  | 0.0229      | 0.0209     | 0.0209   |
| 2048  | 0.1495      | 0.1376     | 0.1356   |
| 4096  | 0.3580      | 0.3420     | 0.3705   |
| 8192  | 1.4866      | 1.4330     | 1.4419   |
| 16384 | 5.8630      | 5.8480     | 5.7142   |
| 32768 | 23.5370     | 23.3429    | 23.2449  |

<insertSort>

| num   | reverseTime | randomTime | sortTime |
| ----- | ----------- | ---------- | -------- |
| 128   | 0.0         | 0.0009     | 0.0      |
| 256   | 0.0019      | 0.0009     | 0.0009   |
| 512   | 0.0049      | 0.0049     | 0.0059   |
| 1024  | 0.0229      | 0.0209     | 0.0209   |
| 2048  | 0.1495      | 0.1376     | 0.1356   |
| 4096  | 0.3580      | 0.3420     | 0.3705   |
| 8192  | 1.4866      | 1.4330     | 1.4419   |
| 16384 | 5.8630      | 5.8480     | 5.7142   |
| 32768 | 23.5370     | 23.3429    | 23.2449  |

bubbleSort일때

역순 : 평균 5배 증가

랜덤 : 평균 4배 증가

정렬 : 평균 4배 증가

selectionSort일때

역순 : 평균 5배 증가

랜덤 : 평균 5배 증가

정렬 : 평균 4배 증가

insertSort일때

역순 : 평균 4배 증가

랜덤 : 평균 4배 증가

정렬 : 평균 4배 증가

위 수치를 가지고 높은 차수의 표본의 시간을 유추하면

<bubbleSort>

| num     | reverseTime | randomTime | sortTime  |
| ------- | ----------- | ---------- | --------- |
| 65536   | 409.482     | 259.9532   | 123.982   |
| 131072  | 2047.41     | 1039.8128  | 495.928   |
| 262144  | 10237.05    | 4159.2512  | 1983.712  |
| 524288  | 51185.25    | 16637.0048 | 7934.848  |
| 1048576 | 255926.25   | 66548.0192 | 31739.392 |

<selectionSort>

| num     | reverseTime | randomTime | sortTime   |
| ------- | ----------- | ---------- | ---------- |
| 65536   | 117.685     | 116.7145   | 116.2245   |
| 131072  | 588.425     | 583.5725   | 581.1225   |
| 262144  | 2942.125    | 2917.8625  | 2905.6125  |
| 524288  | 14710.625   | 14589.3125 | 14528.0625 |
| 1048576 | 73553.125   | 72946.5625 | 72640.3125 |

<insertSort>

| num     | reverseTime | randomTime | sortTime   |
| ------- | ----------- | ---------- | ---------- |
| 65536   | 94.148      | 93.3716    | 92.9796    |
| 131072  | 376.592     | 373.4864   | 371.9184   |
| 262144  | 1506.368    | 1493.9456  | 1487.6736  |
| 524288  | 6025.472    | 5975.7824  | 5950.6944  |
| 1048576 | 24101.888   | 23903.1296 | 23802.7776 |

해당 추출값들을 토대로 그래프를 그려보겠다.

<reverseTime>

| num     | selectionSort | bubbleSort | insertSort |
| ------- | ------------- | ---------- | ---------- |
| 128     | 0.0           | 0.009      | 0.0        |
| 256     | 0.0019        | 0.0039     | 0.0019     |
| 512     | 0.0049        | 0.0189     | 0.0049     |
| 1024    | 0.0229        | 0.0728     | 0.0229     |
| 2048    | 0.1495        | 0.3147     | 0.14954    |
| 4096    | 0.3580        | 1.2755     | 0.3580     |
| 8192    | 1.4866        | 5.0866     | 1.4866     |
| 16384   | 5.8630        | 20.6754    | 5.5830     |
| 32768   | 23.5370       | 81.8964    | 23.5370    |
| 65536   | 117.685       | 409.482    | 94.148     |
| 131072  | 588.425       | 2047.41    | 376.592    |
| 262144  | 2942.125      | 10237.05   | 1506.368   |
| 524288  | 14710.625     | 51185.25   | 6025.472   |
| 1048576 | 73553.125     | 255926.25  | 24101.888  |

![reverse-time](https://user-images.githubusercontent.com/76646095/166944326-7306d0fa-1610-4d23-93ce-e3c92e5407dc.png)

<randomTime>

| num     | selectionSort | bubbleSort | insertSort |
| ------- | ------------- | ---------- | ---------- |
| 128     | 0.0009        | 0.0009     | 0.0009     |
| 256     | 0.0009        | 0.0019     | 0.0009     |
| 512     | 0.0049        | 0.0129     | 0.0049     |
| 1024    | 0.0209        | 0.0558     | 0.02094    |
| 2048    | 0.1376        | 0.2438     | 0.1376     |
| 4096    | 0.3420        | 0.9800     | 0.3420     |
| 8192    | 1.4330        | 4.0079     | 1.4330     |
| 16384   | 5.8480        | 16.0554    | 5.8480     |
| 32768   | 23.3429       | 64.9883    | 23.3429    |
| 65536   | 116.7145      | 259.9532   | 93.3716    |
| 131072  | 583.5725      | 1039.8128  | 373.4864   |
| 262144  | 2917.8625     | 4159.2512  | 1493.9456  |
| 524288  | 14589.3125    | 16637.0048 | 5975.7824  |
| 1048576 | 72946.5625    | 66548.0192 | 23903.1296 |

![random-time](https://user-images.githubusercontent.com/76646095/166944340-c4d85486-189b-41e6-91ca-7267ab6a5859.png)

<SortTime>

| num     | selectionSort | bubbleSort | insertSort |
| ------- | ------------- | ---------- | ---------- |
| 128     | 0.0           | 0.0        | 0.0        |
| 256     | 0.0009        | 0.0009     | 0.0009     |
| 512     | 0.0059        | 0.0060     | 0.0059     |
| 1024    | 0.0209        | 0.0279     | 0.0209     |
| 2048    | 0.1356        | 0.1513     | 0.1356     |
| 4096    | 0.3705        | 0.4838     | 0.3705     |
| 8192    | 1.4419        | 1.9766     | 1.4419     |
| 16384   | 5.7142        | 7.9043     | 5.7142     |
| 32768   | 23.2449       | 30.9955    | 23.2449    |
| 65536   | 116.2245      | 123.982    | 92.9796    |
| 131072  | 581.1225      | 495.928    | 371.9184   |
| 262144  | 2905.6125     | 1983.712   | 1487.6736  |
| 524288  | 14528.0625    | 7934.848   | 5950.6944  |
| 1048576 | 72640.3125    | 31739.392  | 23802.7776 |

![sort-time](https://user-images.githubusercontent.com/76646095/166944351-fb9ba812-e4e4-4a5a-84ed-e7c97626dd55.png)