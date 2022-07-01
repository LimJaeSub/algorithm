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
