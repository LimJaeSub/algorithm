# algorithm

허프만 코드의 시간복잡도는 노드를 만들때 시간을 소모하고<br>
해당 노드로 트리를 만들때 시간을 소모한다.<br>

```
node* makenode(char alphabet, int freq, struct node* left, struct node* right)
{
	timecheck++;
	node* new_node = (node*)malloc(sizeof(node));
	new_node->alphabet = alphabet;
	new_node->freq = freq;
	new_node->left = left;
	new_node->right = right;
	return new_node;
}
```

노드를 만들때 timecheck를 증가시켜주었고<br>

```
//허프만 코드 트리 생성(압축하고자 하는 문자열)
node* make_Huffman_tree(char arr[])
{
	timecheck++;
	int i = 0;
	int j;
	int temp_n = 0;
	int min = 0;  //제일 빈도수가 작은 index
	int min2 = 0; //두 번째로 빈도수가 작은 index
	int fre[alph_num] = { 0 };  //알파벳(A~Z) 빈도 수
	int check[alph_num] = { 0 };  //합쳐졌는지 확인(합쳐져서 살펴 볼 필요가 없으면 -1)
	node* tree[alph_num] = { NULL };  //비교할 노드 배열
	node* new_node; //새 노드
```

트리를 생성할때 증가시켜주었다.<br>
