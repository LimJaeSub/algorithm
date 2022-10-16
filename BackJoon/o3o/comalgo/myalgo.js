class geneticalgorithm{
    constructor(){
        this.arraylength = 4;
        this.candidate = new Array(this.arraylength);
        this.checkArray = new Array(this.arraylength);
        this.areaArray = new Array(this.arraylength);
    }

    //유전자(후보해) 생성
    make(){
        let nGenerations = this.arraylength;
        let sum = 0;
        for(let i=0;i<nGenerations;i++){
            this.candidate[i] = Math.random();
            this.checkArray[i] = this.check(this.candidate[i]);
            sum = sum+this.checkArray[i];
        }
        console.log(sum);
        for(let i=0;i<nGenerations;i++){
            this.areaArray[i] = this.area(sum,this.checkArray[i]);
        }
    }
6
    //적합도 계산
    check(x){
        let problem = -x^2+38*x+80;
        return problem;
    }

    //원반 면적 계산
    area(sum,result){
        let areaResult = (result/sum)*100;
        return areaResult;
    }

    // solve(){
    //     let nGenerations = this.candidate.length;
    //     for(let i=0; i<nGenerations;i++){
    //         this.candidate = select(this.candidate);
    //     }
    //     return 0;
    // }

    select(){

    }
    
}

const gen = new geneticalgorithm;

gen.make();
for(var i=0;i<4;i++){
    console.log(gen.areaArray[i]);
}



