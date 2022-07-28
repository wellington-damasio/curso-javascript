const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Maiara'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Maiara']

console.log(meuArray, quaseArray.toString())