const prompt = require('prompt-sync')()

function deMaior(numero){
    const numeroNovo = Number(numero)
    
    if(isNaN(numeroNovo)){
        return NaN
    }

    if(numeroNovo >= 18){
        return true
    }
    return false
}

const idade = prompt('Informe sua idade: ')

const resultado = deMaior(idade)

if(isNaN(resultado)){
    console.log('Você deve informar números')
}else{
    if(resultado){
        console.log('Você é de maior')
    }else{
        console.log('você é de menor')
    }
}