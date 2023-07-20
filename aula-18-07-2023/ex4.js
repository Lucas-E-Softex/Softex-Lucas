function meanCalculation(numbers){
  let sum = numbers.reduce((count, element) => {
    return count + element
  })
  return sum / numbers.length
}

let mean = meanCalculation([1,2,3,4])
console.log(mean)
