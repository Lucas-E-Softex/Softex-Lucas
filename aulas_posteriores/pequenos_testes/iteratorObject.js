let spreadOnObjectTest = {
    testString: "Hello! I'm using spread on an object!",
    amIUsingSpreadOnAnObject: true,
    [Symbol.iterator](){
        let keysIterator = Object.keys(spreadOnObjectTest)[Symbol.iterator]()
        let valuesIterator = Object.values(spreadOnObjectTest)[Symbol.iterator]()
        return {
            next: () => {
                let iteratorKey = keysIterator.next()
                let iteratorValue = valuesIterator.next()
                if(!iteratorKey.done){
                    return {
                        done: false,
                        value: {
                            key:iteratorKey.value,
                            value:iteratorValue.value
                        }
                    }
                }else{
                    return {
                        done: true
                    }
                }
            }
        }
    }
}


//com for..of
console.log('com for..of')
for(objeto of spreadOnObjectTest){
    console.log(objeto)
}

//com spread
console.log('\n\n com spread')
console.log(...spreadOnObjectTest)

//com for..in
console.log('\n\n com for..in')
for(index in spreadOnObjectTest){
    console.log(index)
}