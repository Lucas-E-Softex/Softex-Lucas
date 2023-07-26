const prompt = require('prompt-sync')()

const numero = prompt('Informe um número: ')

if(isNaN(Number(numero))){
    console.log('Você deve informar números')
}else{
    if(numero % 2 === 0){
        console.log('Numero é par')
    }else{
        console.log('Número é ímpar')
    }
}