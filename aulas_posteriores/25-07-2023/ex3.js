const prompt = require('prompt-sync')()

function soma(x, y){
    if(isNaN(Number(x)) || isNaN(Number(y))){
        return false
    }
    return Number(x)+Number(y)
}

const primeiro = prompt('Digite o primeiro número: ')
const segundo = prompt('Digite o segundo nome: ')

const resultado = soma(primeiro, segundo)
if(resultado){
    console.log(`A soma é ${resultado}`)
}else{
    console.log('Você deve informar números')
}