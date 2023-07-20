const prompt = require('prompt-sync')()
const number = prompt('Enter an integer number: ')

function isPrime(num){
  for(let i = 2; i <= Math.ceil(num/2); i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

let transfNumber = Number(number)
if(!transfNumber || !Number.isInteger(transfNumber) || transfNumber <= 0){
  while(!transfNumber || !Number.isInteger(transfNumber)  || transfNumber <= 0){
    newNumber = prompt('Enter an integer number: ')
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
    if(isPrime(i) && i !== 0 && i !== 1){
      console.log(`${i} is prime`)
    }else{
      console.log(`${i} is not prime`)
    }
  }
}