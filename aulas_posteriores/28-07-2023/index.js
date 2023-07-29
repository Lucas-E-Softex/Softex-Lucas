import { gerarEmpresas } from "./gerar-empresas.js";

let biggestBuy = {
    id: '',
    data: '',
    valor: Number.MIN_SAFE_INTEGER,
    status: ''
}

let biggestBuyCompany = {}

let biggestBuyList = []

let buyValueList = []

const empresas = gerarEmpresas(10000)
empresas.forEach((empresa) => {
    empresa.pedidos.forEach((pedido) => {
        if(Number(pedido.valor) > biggestBuy.valor){
            biggestBuy = pedido
            biggestBuyCompany = empresa
        }else if(Number(pedido.valor) === biggestBuy.valor){
            biggestBuyList.push(pedido)
        }
    })
})

console.log('\n')
console.log('-------------- EMPRESA DO MAIOR PEDIDO -----------------')
console.log(biggestBuyCompany.nome)
console.log('\n')

console.log('-------------- PRIMEIRO MAIOR PEDIDO ENCONTRADO -----------------')
console.log(biggestBuy)


console.log('\n')
console.log(`Existe um total de ${biggestBuyList.length} pedidos com o mesmo preço do maior pedido`)