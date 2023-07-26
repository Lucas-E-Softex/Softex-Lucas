const prompt = require('prompt-sync')()

let letContinue = true

let numbers = []

while(letContinue){
    const numero = prompt("Digite um numero: ")
    const convNumber = Number(numero)
    if(isNaN(convNumber)){
        console.log('Você deve informar somente números')
        continue;
    }else{
        numbers.push(convNumber)
        let shouldContinue = prompt('Quer adicionar mais números? 1 para sim 2 para não: ')
        if(shouldContinue === '1'){
            continue
        }else{
            letContinue = false
        }
    }
}

let lowest = Number.MAX_SAFE_INTEGER
let biggest = Number.MIN_SAFE_INTEGER

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > biggest){
        biggest = numbers[i]
    }
    if(numbers[i] < lowest){
        lowest = numbers[i]
    }
}

console.log('Maior numero: ', biggest)
console.log("Menor numero: ", lowest)