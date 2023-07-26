const prompt = require('prompt-sync')()

const palavra = prompt("Digite a palavra para verificar se é um palíndromo: ")

let palavraInvertida = ''

for (let i = palavra.length - 1; i >= 0; i--){
    palavraInvertida = palavraInvertida + palavra[i]
}

if(palavraInvertida === palavra){
    console.log('É um palíndromo')
}else{
    console.log("Não é um palíndromo")
}