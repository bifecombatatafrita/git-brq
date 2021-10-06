"use strict";
var Exercicio1 = /** @class */ (function () {
    function Exercicio1(exercicio1) {
        if (exercicio1 === void 0) { exercicio1 = true; }
        if (exercicio1 == true) {
            console.log("-----------------------Exercicio1---------------------------");
            console.log("na op\u00E7\u00E3o a \u00E9 feita a soma de dois numeros: " + this.sum(1, 1));
            console.log("na op\u00E7\u00E3o b \u00E9 feita a concatena\u00E7\u00E3o de uma string com um numero: " + this.sum('1', 1));
            console.log("na op\u00E7\u00E3o c \u00E9 feita a concatena\u00E7\u00E3o de duas strings: " + this.sum('1', '1'));
        }
    }
    Exercicio1.prototype.sum = function (a, b) {
        return a + b;
    };
    return Exercicio1;
}());
var Exercicio2 = /** @class */ (function () {
    function Exercicio2() {
        this.var1 = "texto";
        this.var2 = 5;
        this.var3 = true;
        console.log("-----------------------Exercicio2---------------------------");
        console.log(typeof this.var1);
        console.log(typeof this.var2);
        console.log(typeof this.var3);
        console.log("Essas variaveis est\u00E3o tipadas na ordem como: " + typeof this.var1 + ", " + typeof this.var2 + " e " + typeof this.var3 + ", ent\u00E3o na tentativa de modificar qualquer uma para algo que n\u00E3o \u00E9 o seu escopo resultar\u00E1 em erro.");
    }
    return Exercicio2;
}());
var Exercicio3 = /** @class */ (function () {
    function Exercicio3() {
        this.valores = ["10", "12", "15", "20", "22"];
        console.log("-----------------------Exercicio3---------------------------");
        this.valores.forEach(function (value) {
            console.log("o valor do item " + value + " somado com 1=" + new Exercicio1(false).sum(Number(value), 1));
        });
    }
    return Exercicio3;
}());
var Exercicio4 = /** @class */ (function () {
    function Exercicio4() {
        this.dominio = [5, 12, 36, 8, 7, 1, 85, 45];
        this.listaValores = [7, 9, 13, 26, 1, 14, 85, 12, 23, 45, 58, 47, 33, 14, 2, 4];
        this.numerosIguais = function (x, y) {
            var retorno = new Array();
            x.forEach(function (value1) {
                y.forEach(function (value2) {
                    if (value1 == value2) {
                        retorno.push(value1);
                    }
                });
            });
            return retorno;
        };
        console.log("-----------------------Exercicio4---------------------------");
        console.log(this.numerosIguais(this.dominio, this.listaValores));
    }
    return Exercicio4;
}());
new Exercicio1();
new Exercicio2();
new Exercicio3();
new Exercicio4();
