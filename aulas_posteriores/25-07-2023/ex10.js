const prompt = require('prompt-sync')()


const celsius = prompt('Informe o valor em celsius')

if(isNaN(celsius)){
    console.log('Você deve informar somente números')
}else{const celsiusConv = Number(celsius)

    const fahrenheit = (celsiusConv * 9/5) + 32
    
    console.log(`${celsiusConv} em fahrenheit é ${fahrenheit}`)}

