const prompt = require('prompt-sync')()

//função para determinar se um número é ou não primo. Para que um número seja primo, ele deve ser divisível somente por si mesmo e por 1
function isPrime(num){
  if(num === 0 || num === 1){
    return false
  }
  if(num === 2){
    return true
  }
  for(let i = 2; i <= Math.ceil(num/2); i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}


const number = prompt('Enter an integer number: ')

//turns prompt to number
let transfNumber = Number(number)

//check if transfNumber is a number, if it's integer and if it's grater than zero
if(!transfNumber || !Number.isInteger(transfNumber) || transfNumber <= 0){
  while(!transfNumber || !Number.isInteger(transfNumber)  || transfNumber <= 0){
    newNumber = prompt('Enter a positive integer number: ')
    transfNumber = Number(newNumber)
  }
  for(let i = 0; i < transfNumber; i++){
    if(isPrime(i)){
      console.log(`${i} is prime`)
    }else{
      console.log(`${i} is not prime`)
    }
  }
}else{
  for(let i = 0; i < transfNumber; i++){
    if(isPrime(i)){
      console.log(`${i} is prime`)
    }else{
      console.log(`${i} is not prime`)
    }
  }
}