class Exercicio1{

    constructor(exercicio1:boolean = true){
        if(exercicio1==true){
            console.log("-----------------------Exercicio1---------------------------")
            console.log(`na opção a é feita a soma de dois numeros: ${this.sum(1,1)}`);
            console.log(`na opção b é feita a concatenação de uma string com um numero: ${this.sum('1',1)}`);
            console.log(`na opção c é feita a concatenação de duas strings: ${this.sum('1','1')}`);
        }
    }

    sum(a: any, b: any){
        return a+b;
    } 
}

class Exercicio2{
    var1 = "texto";
    var2 = 5;
    var3 = true;

    constructor(){
        console.log("-----------------------Exercicio2---------------------------")
        console.log(typeof this.var1);
        console.log(typeof this.var2);
        console.log(typeof this.var3);
        console.log(`Essas variaveis estão tipadas na ordem como: ${typeof this.var1}, ${typeof this.var2} e ${typeof this.var3}, então na tentativa de modificar qualquer uma para algo que não é o seu escopo resultará em erro.`)
    }
}

class Exercicio3{
    valores = ["10","12","15","20","22"];

    constructor(){
        console.log("-----------------------Exercicio3---------------------------")
        this.valores.forEach(function(value){
            console.log(`o valor do item ${value} somado com 1=${new Exercicio1(false).sum(Number(value),1)}`)
        });
    }
}

class Exercicio4{
    dominio = [5,12,36,8,7,1,85,45];
    listaValores = [7,9,13,26,1,14,85,12,23,45,58,47,33,14,2,4]

    constructor(){
        console.log("-----------------------Exercicio4---------------------------")
        console.log(this.numerosIguais(this.dominio,this.listaValores))
    }

    numerosIguais = (x: number[], y: number[]): number[] => {
        let retorno = new Array<number>();
        x.forEach(function(value1){
            y.forEach(function(value2){
                if(value1 == value2){
                    retorno.push(value1);
                }
            })
        })
        return retorno;
    }
}


new Exercicio1();
new Exercicio2();
new Exercicio3();
new Exercicio4();
