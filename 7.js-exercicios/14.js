function objectToArray (obj) {
    return Object.entries(obj)
}

console.log(objectToArray({nome: 'Wellington', idade: 22, peso: 70}))