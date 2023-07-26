const prompt = require("prompt-sync")()

function mean(x,y,z){
    const first = Number(x)
    const second = Number(y)
    const third = Number(z)

    if(isNaN(first) || isNaN(second) || isNaN(third)){
        return false
    }

    return (first + second + third) / 3
}

const x = prompt('Digite o primeiro numero: ')
const y = prompt('Digite o segundo numero: ')
const z = prompt('Digite o terceiro numero: ')

const result = mean(x,y,z)

if(!result){
    console.log('Você deve informar somente numeros')
}else{
    console.log(result)
}