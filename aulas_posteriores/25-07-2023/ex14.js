const prompt = require('prompt-sync')()

let letContinue = true

let lista = []

while(letContinue){
    const numero = prompt("Digite um elemento para a lsita: ")
    const convNumber = Number(numero)
    
        lista.push(convNumber)
        let shouldContinue = prompt('Quer adicionar mais elementos? 1 para sim 2 para não: ')
        if(shouldContinue === '1'){
            continue
        }else{
            letContinue = false
        }
}

let novaLista = []

for(let i = lista.length - 1; i >=0 ; i--){
    novaLista.push(lista[i])
}

console.log('A lista invertida fica: ', novaLista)