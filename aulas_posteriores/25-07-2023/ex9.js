const prompt = require('prompt-sync')()

const number = prompt('Digite o número: ')

const convNumber = Number(number)
let isPrime = true

if(isNaN(convNumber)){
    console.log('Você deve informar números')
}else{
    if(convNumber === 0 || convNumber === 2){
        console.log('Primo')
    }else if(convNumber === 1){
        console.log('Não é primo')
    }else{
        for(let i = 2; i <= Math.ceil(convNumber/2); i++){
            if(convNumber % i === 0){
                isPrime = false
            }
        }
        if(isPrime){
            console.log('É primo')
        }else{
            console.log('Não é primo')
        }
    }
    
}