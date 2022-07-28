function aoContrario (numeroOuBooleano) {
    if(typeof numeroOuBooleano == "boolean") {
        return !numeroOuBooleano
    } else if (typeof numeroOuBooleano == 'number') {
        return -numeroOuBooleano
    } else {
        return 'Tipo de dado não suportado'
    }
}

console.log(aoContrario(12))
console.log(aoContrario(false))
console.log(typeof 12 == 'number')
console.log(aoContrario(1))


