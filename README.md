# 포드 풀커슨 알고리즘에 대한 보고서

목차

1\. 알고리즘의 정의

2\. 알고리즘의 동작 방식

3\. 코드 실행 결과 및 성능 분석

### 알고리즘의 정의

포드 풀커슨 알고리즘에 설명하기 전 **네트워크 플로우** 라는 것부터 알아야한다.

네트워크 플로우란, 특정 지점에서 도착 지점까지 얼마나 많은 데이터를 보낼 수 있는지 계산하는 문제다.

이 네트워크 플로우 문제를 풀기 위해선 **포드 폴커슨 알고리즘**이 필요하다.

네트워크 플로우의 기본 용어부터 정리하자면

- 용량(capacity) : c(u,v) 정점u에서 v로 전송할 수 있는 최대 용량
- 유량(flow) : f(u,v) 정점 u에서 v로 실제 흐르고 있는 유량
- 잔여 용량(residual capacity) : r(u,v) = c(u,v)-f(u,v) 용량-유량의 차이
- 소스(soruce) : s 모든 유량의 시작되는 정점
- 싱크(sink) : t 모든 유량이 도착하는 정점
- 증가 경로 : 소스에서 싱크로 유량을 보낼 수 있는 경로

이 네트워크 플로우에서 반드시 허용되어야만하는 세 가지 조건이 있다.

1.  용량 제한 속성 f(u,v)<=c(u,v) : 두 간선에서 흐르는 유량은 용량을 넘을 수 없다.
2.  유량의 대칭성 f(u,v)=-f(v,u) : 정점 u에서 v로 흐르는 유량과 정점 v에서 u로의 음수의 유량은 같다.
3.  유량의 보존성 : 각 정점에서 들어오는 나가는 유량은 같다.

기본적인 네트워크 플로우의 동작 방식부터 알아보겠다.

[##_Image|kage@dtXfcC/btrAlhN7RMS/pQiar2IexEt3JfhD2JgXz1/img.png|CDM|1.3|{"originWidth":818,"originHeight":438,"style":"alignCenter"}_##]

소스 s에서 싱크 t까지 가는 네트워크의 최대 유량을 계산하는 과정이다

증가 경로에 쓰여진 숫자는 유량/용량 이다.

이 예시의 그래프의 최대 유량은 2가된다.

s->a->t에서 비록 a->t의 용량이 2지만 s->a에서의 용량이 1이라 1밖에 전달을 못한다

마찬가지로 s->b->t에서의 최소용량이 1이라 두 경로를 합치면 싱크 t에는 2가 들어가게 된다.

그러나 만약 알고리즘이 s->a->b->t를 탐색하게 되면

[##_Image|kage@bLA3YR/btrAroSyyLP/Kij9Abg62v3oISGAkrTuSk/img.png|CDM|1.3|{"originWidth":782,"originHeight":422,"style":"alignCenter"}_##]

s->b에 유량을 보내도 b에서 t로가는 잔여 용량이 없기 때문에 싱크 T까지 가는 최대 유량이 1이되는 오답이 발생한다.

여기서 유량 상쇄와 포드-풀커슨 알고리즘으로 해당 문제 해결이 가능하다.

### 유량 상쇄

유량 상쇄란, 모든 경로에 있는 간선들과 반대방향의 간선을 추기한 뒤

간선으로 유량을 흘려보냈을때 역간선에 음의 유량을 흘려보내서 유량을 +-=0(상쇄)으로 만드는 것을 의미한다.

ex) a->b의 유량, 용량이 각각 1이라면 역간선 b->a의 유량은 -1이 된다.

따라서 잔여 용량을 계산하면 r(b,a) = c(b,a)-f(b,a) = 0-(-1) = 1 이 된다.

여기서 왜 b->a의 용량의 값이 0이냐면, 실제로 존재하지 않는 간선이기 때문이다.

존재하지 않는 간선이므로 용량의 값 역시 0이다.

그럼, 실제로 존재하지 않는 간선임에도 불구하고 어떻게 역간선으로 유량을 보낼 수 있는것일까?

음수의 유량은 유량을 돌려주는 것과 같은 의미이다. 다시말해서 유량 전송이랑 똑같은 의미가 된다.

따라서 기존 유량을 상쇄하는 것은 새 유량을 전송하는 것과 같은 연산식이라고 할 수 있다.

### 포드-풀커슨 알고리즘

유량 상쇄를 이용해 포드-풀커슨 알고리즘의 동작 방식을 알아보겠다.

1\. 네트워크에 있는 모든 간선의 유량을 0으로 초기화하고, 역간선의 유량도 0으로 초기화시킨다.

[##_Image|kage@NZeO4/btrAqI5nDSu/EySepZo2TkHM5D1KkG9nK1/img.png|CDM|1.3|{"originWidth":426,"originHeight":293,"style":"alignCenter"}_##]

2\. DFS를 사용해 s->a->b->T 의 경로를 탐색한다, 이후 최소 잔여 용량을 싱크 T에 흘려보낸다.

[##_Image|kage@bt8VeE/btrAsraKHyQ/RyFZLnTm8yt8HYpLP9kH41/img.png|CDM|1.3|{"originWidth":503,"originHeight":281,"style":"alignCenter"}_##]

3\. 역간선에 음수의 유량 -1을 추가로 흘려보낸다

이따, b->a의 유량이 -1이 되고 용량이 0이므로 추가로 1의 유량이 전달이 가능하다.

[##_Image|kage@kFjuS/btrArJbEkNE/FNjx5L4Gyhw5joZhkPdTk0/img.png|CDM|1.3|{"originWidth":417,"originHeight":409,"style":"alignCenter"}_##]

4\. 결과적으로 s->b->a->T로 1의 유량이 전달이 가능하면서 a와 b는 서로 상쇄되는 것을 알 수 있다.

[##_Image|kage@bxy2nc/btrAplQn1a8/yOJXRpvydQ8HhjZo9p7D9K/img.png|CDM|1.3|{"originWidth":467,"originHeight":323,"style":"alignCenter"}_##]

위의 특성을 이용해 C++기반으로 코드를 작성해보겠다.

```
#include <iostream>
#include <vector>
#include <queue>

#define MAX 100
#define INF 1000000000 //무한대를 나타내줌

using namespace std;

int n = 6;              // 노드의 개수
int capacity[MAX][MAX]; // 용량
int flow[MAX][MAX];     // 현재 유량
int visited[MAX];       // 현재 노드 방문 여부를 삽입하는 배열
int result;             // 최대 유량 결과

// 노드가 어느 노드로부터 왔는지 확인하는 vector형 배열
// adj[3]=2면 3의 노드는 2로부터 왔다 라는 뜻
vector<int> adj[MAX];

// 최대 유량 계산
void maxFlow(int source, int sink)
{

    while (1)
    {

        // 노드 방문 배열을 전부 -1로 초기화
        fill(visited, visited + MAX, -1);

        for (int i = 0; i < adj[source].size(); i++)
        {
            int end = adj[source][i];
            if (capacity[source][end] - flow[source][end] > 0 && visited[end] == -1)
            {
                visited[end] = source;
                if (end == sink)
                    break;
                maxFlow(end, sink);
            }
        }

        // sink 까지의 경로를 못 찾았다면, 더 이상의 증가 경로가 없음
        if (visited[sink] == -1)
            break;

        // sink부터 역방향으로 i가 source가 될때까지 visited를 탐색
        int f = INF;
        for (int i = sink; i != source; i = visited[i])
        {
            // min(최소유량, 용량(이전노드, 현재노드) - 유량(이전노드, 현재노드))
            f = min(f, capacity[visited[i]][i] - flow[visited[i]][i]);
        }

        // 증가 경로는 유량 증가, 역 방향 경로는 유량 감소
        for (int i = sink; i != source; i = visited[i])
        {
            // 유량(이전노드, 현재노드) += f
            flow[visited[i]][i] += f;
            // 유량(현재노드, 이전노드) -= f
            flow[i][visited[i]] -= f;
        }

        // 최대 유랑 추가
        result += f;
    }
}

int main()
{

    adj[1].push_back(2); // 간선 추가
    adj[2].push_back(1); // 역간선 추가
    capacity[1][2] = 1;  // 용량 추가

    adj[1].push_back(3);
    adj[3].push_back(1);
    capacity[1][3] = 3;

    adj[2].push_back(3);
    adj[3].push_back(2);
    capacity[2][3] = 1;

    adj[2].push_back(4);
    adj[4].push_back(2);
    capacity[2][4] = 2;

    adj[3].push_back(4);
    adj[4].push_back(3);
    capacity[3][4] = 1;

    // 1 에서 4로 흐르는 최대 유량 탐색
    maxFlow(1, 4);

    printf("최대 유량 : %d\n", result);
}
```

[##_Image|kage@lxXlB/btrAJSTsBMr/PYTknEUK8zqCLMDk1fuSBK/img.png|CDM|1.3|{"originWidth":714,"originHeight":502,"style":"alignCenter"}_##]

최대 유량이 2로 나오는 것을 알 수 있다.

최대 유량을 찾는 코드에서 재귀함수를 통해 다시 maxflow()를 호출시켜주는 dfs방식을 이용했다.

하지만, dfs방식을 사용하는데는 한가지 문제점이 있다.

[##_Image|kage@bdPdDi/btrAJTE7Oxp/4fsY4n3IfEnDrrGxpI9MHk/img.png|CDM|1.3|{"originWidth":354,"originHeight":237,"style":"alignCenter"}_##]

해당 그림을 예시로 들면

DFS의 동작 방식일 경우

1->2->3->4 // 1->3->2->4 를 각각 1000번의 유량전송을 통해 탐색을 한다

반면 BFS 방식일경우

1->2->4 (1000flow)

1->3->4 (1000flow)

로 2번의 탐색을 통해 최대 유량을 찾는다.

이 BFS방식을 사용한 포드-풀커슨 알고리즘을 에드몬드-카프 알고리즘이라고 한다.

```

#include <iostream>
#include <vector>
#include <queue>

#define MAX 100
#define INF 1000000000 //무한대를 나타내줌

using namespace std;

int n = 6;              // 노드의 개수
int capacity[MAX][MAX]; // 용량
int flow[MAX][MAX];     // 현재 유량
int visited[MAX];       // 현재 노드 방문 여부를 삽입하는 배열
int result;             // 최대 유량 결과

// 노드가 어느 노드로부터 왔는지 확인하는 vector형 배열
// adj[3]=2면 3의 노드는 2로부터 왔다 라는 뜻
vector<int> adj[MAX];

// 최대 유량 계산
void maxFlow(int source, int sink)
{

    while (1)
    {

        // 노드 방문 배열을 전부 -1로 초기화
        fill(visited, visited + MAX, -1);
        queue<int> q;
        q.push(source);

        while (!q.empty())
        {

            // queue 의 맨앞의 원소를 추출후 start에 저장
            int start = q.front();
            q.pop();

            // queue 의 front 에 위치한 정점과 인접한 정점 탐색
            for (int i = 0; i < adj[start].size(); i++)
            {

                // 인접 노드(경로의 마지막 노드)
                int end = adj[start][i];

                // c[s][e] - f[s][e]>0 : 용량 제한 속성에서 flow를 우측으로 이항한 것
                // visited[end] : 아직 방문하지 않은 노드
                if (capacity[start][end] - flow[start][end] > 0 && visited[end] == -1)
                {
                    // 경로의 마지막 노드를 queue에 삽입
                    q.push(end);
                    // 해당 노드가 어디서부터 왔는지 삽입
                    // bfs에서는 visited[end]=true;의 역할을 해준다.
                    visited[end] = start;
                    // 인접 정점이 도착지일 경우, 하나의 증가 경로를 찾았으므로, 더 이상 탐색하지 않고 종료
                    if (end == sink)
                        break;
                }
            }
        }

        // sink 까지의 경로를 못 찾았다면, 더 이상의 증가 경로가 없음
        if (visited[sink] == -1)
            break;

        // sink부터 역방향으로 i가 source가 될때까지 visited를 탐색
        int f = INF;
        for (int i = sink; i != source; i = visited[i])
        {
            // min(최소유량, 용량(이전노드, 현재노드) - 유량(이전노드, 현재노드))
            f = min(f, capacity[visited[i]][i] - flow[visited[i]][i]);
        }

        // 증가 경로는 유량 증가, 역 방향 경로는 유량 감소
        for (int i = sink; i != source; i = visited[i])
        {
            // 유량(이전노드, 현재노드) += f
            flow[visited[i]][i] += f;
            // 유량(현재노드, 이전노드) -= f
            flow[i][visited[i]] -= f;
        }

        // 최대 유랑 추가
        result += f;
    }
}

int main()
{

    adj[1].push_back(2); // 간선 추가
    adj[2].push_back(1); // 역간선 추가
    capacity[1][2] = 1;  // 용량 추가

    adj[1].push_back(3);
    adj[3].push_back(1);
    capacity[1][3] = 3;

    adj[2].push_back(3);
    adj[3].push_back(2);
    capacity[2][3] = 1;

    adj[2].push_back(4);
    adj[4].push_back(2);
    capacity[2][4] = 2;

    adj[3].push_back(4);
    adj[4].push_back(3);
    capacity[3][4] = 1;

    // 1 에서 4로 흐르는 최대 유량 탐색
    maxFlow(1, 4);

    printf("최대 유량 : %d\n", result);
}
```

따라서, bfs방식을 사용하는 에드몬드-카프 알고리즘이 더 효율적이라고 생각할 수 있지만,

포드 폴커슨 의 시간복잡도 : **O( (|E|+|V|) \* F )**

에드몬드 카프 의 시간복잡도 : **O( |V| \* (|E|^2) )**

(E:간선 // V:정점 // F:최대 유량)

포드 폴커슨의 시간복잡도는 최대 유량 비중이 크고

에드몬드 카프의 시간복잡도는 간선의 비중이 크다.

따라서 최대 유량이 적으면 포드 폴커슨이 효율적이고, 간선이 적을경우 에드몬드 카프가 더 효율적이라고 알 수 있다.
