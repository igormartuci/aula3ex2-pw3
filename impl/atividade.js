/* let nt1: number = 10
let nt2: number = 5
let nt3: number = 7 */
/* let media = function(n1:number, n2:number, n3:number) : number {
    return (n1 + n2 + n3) / 3
} */
//let media = (n1:number) => (n1 + n2 + n3) / 3
/* if (media(5,6,7) < 5) {
    console.log("reprovado")
} else {
    console.log("aprovado")
} */
// console.log(`A média é ${media(nt1,nt2,nt3)}`)
/* let media = function(n1:number): string {
    if (n1 == 0) {
        return "E"
    } else if (n1 >= 1 && n1 <= 35) {
        return "D"
    } else if (n1 >= 36 && n1 <= 60) {
        return "C"
    } else if (n1 >= 61 && n1 <= 85) {
        return "B"
    } else if (n1 >= 86 && n1 <= 100) {
        return "A"
    } else {
        return "-"
    }
} */
var media = function (n1) {
    if (n1 == 0) {
        return "E";
    }
    else if (n1 >= 1 && n1 <= 35) {
        return "D";
    }
    else if (n1 >= 36 && n1 <= 60) {
        return "C";
    }
    else if (n1 >= 61 && n1 <= 85) {
        return "B";
    }
    else if (n1 >= 86 && n1 <= 100) {
        return "A";
    }
    else {
        return "-";
    }
};
var valor = 0;
while (valor <= 1000) {
    console.log("" + media(valor));
    valor = valor + 1;
}
