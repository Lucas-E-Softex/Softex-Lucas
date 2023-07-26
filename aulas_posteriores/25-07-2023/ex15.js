const prompt = require('prompt-sync')()



const limite = prompt('Digite o limite para gerar os números: ')
const limiteConv = Number(limite)
let randNumber = 0
if(isNaN(limiteConv)){
    console.log('O limite deve ser um número')
}else{
    randNumber = Math.floor(Math.random() * limiteConv) + 1
}

let isWrong = true

while(isWrong){
    let tentativa = prompt('Tente adivinhar o número: ')
    const tentativaConv = Number(tentativa)
    if(isNaN(tentativaConv)){
        console.log("Você deve informar somente números")
        continue
    }
    if(tentativaConv === randNumber){
        console.log('Você acertou!')
        isWrong = false
    }else{
        console.log('Você errou! Quer desistir ou continuar?')
        const sair = prompt("1 para continuar 2 para desistir: ")

        if(sair === '1'){
            continue
        }else{
            console.log(`O número correto era ${randNumber}`)
            isWrong = false
        }
    }
}
