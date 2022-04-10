#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX 100
#define alph_num 26

// 트리 노드
typedef struct node
{
    char str;           // 문자열
    int freq;           // 빈도수(value)
    struct node *left;  //왼쪽 자식 노드
    struct node *right; //오른쪽 자식 노드
} node;                 // node라는 이름으로 구조체 형식 재정의

node *makenode(char str, int freq, struct node *left, struct node *right)
{
    node *new_node = (node *)malloc(sizeof(node)); //새로운 노드 생성, 노드의 크기만큼 동적메모리로 생성한다.
    new_node->str = str;
    new_node->left = left;
    new_node->freq = freq;
    new_node->right = right;
    //새로 만든 노드의 형식 설정
}

node *make_Huffman_tree(char arr[])
{
    int i = 0;
    int j;
    int temp_n = 0;
    int min = 0;
    int min2 = 0;
}