class Conta{
  constructor(titular, numero){
    this.numero = numero
    this.saldo = 0
    this.titular = titular
  }
}

const conta1 = new Conta('Lucas', 001)

console.log(conta1.numero)