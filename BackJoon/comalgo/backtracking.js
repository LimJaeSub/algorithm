let num =0; // 입력받은 숫자
let solution = 0; // 정답

let board = [];

// 이전에 둔 행을 돌면서 범위가 겹치는지 체크
function hasAnyQueensConflicts(x){ 
    for(let i=0; i<x; i++){ 
        if(board[i] === board[x]) { // 이전말과 같은 행 같은 열인지 체크
            return true;
        }
        if(Math.abs(board[x] - board[i]) === x-i){ // 대각선 체크
            return true;
        }
    }

    return false;
}

// 재귀형태로 백트레킹기법 활용
function findNQueen(row){
    if(row === num){
        solution ++;
        return;
    }
    for(let col=0; col<num; col++){
        board[row] = col;
        if(!hasAnyQueensConflicts(row)){ // 충돌 안한다면
            findNQueen(row+1);
        }
    }
}

// 첫번째행을 넣고 실행
findNQueen(0);

console.log(solution);



const [...spread,am:3;