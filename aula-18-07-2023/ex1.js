const prompt = require('prompt-sync')()

let number = prompt('inform an integer number: ')

if(!Number(number) || !Number.isInteger(Number(number))){
  while(!Number(number) || !Number.isInteger(Number(number))){
    number = prompt('You must inform an integer number: ')
  }
  transfNumber = Number(number)
  if(transfNumber % 2 === 0){
    console.log('The number is an even number')
  }else{
    console.log('The number is an odd number')
  }
}else{
  transfNumber = Number(number)
  if(transfNumber % 2 === 0){
    console.log('The number is an even number')
  }else{
    console.log('The number is an odd number')
  }
}