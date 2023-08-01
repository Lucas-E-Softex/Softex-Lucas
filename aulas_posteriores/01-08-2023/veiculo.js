class Veiculo{
  constructor(rodas, marca, cor, valor){
    this._rodas = rodas
    this._marca = marca
    this._cor = cor
    this._valor = valor
  }
  getRodas(){
    return this._rodas
  }
  setRodas(rodas){
    this._rodas = rodas
  }
  setMarca(marca){
    this._marca = marca
  }
}