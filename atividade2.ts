let velocidade: number = 120
let freqcarro: number = 0.7
let loop: number = 0

let calculo = (carro:number, limite:number) => {
    let vCarro = 300 * (1 / carro - 1)

    if (vCarro > limite) {
        if (vCarro <= limite * 1.20) {
            console.log(`Velocidade do carro: ${vCarro} // Valor da multa: R$ 127,69`)
        } else {
            console.log(`Velocidade do carro: ${vCarro} // Valor da multa: R$ 574,62`)
        }    
    } else {
        console.log(`Velocidade do carro: ${vCarro} // Valor da multa: R$ 0`)
    }
}

// calculo(0.7,120)

while (loop <= 10) {
    calculo(freqcarro,velocidade)
    freqcarro = freqcarro + 0.020
    velocidade = velocidade - 2
    loop = loop + 1
}

