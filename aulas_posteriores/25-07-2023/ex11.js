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
console.log('Numeros pares: \n')
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i])
    }
}