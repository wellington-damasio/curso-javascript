function retirarPropriedade (object, propriedade) {
    const obj = object
    const excluir = propriedade
    delete obj[excluir]

    return obj
}

console.log(retirarPropriedade({a: 1, b: 2, c: 3}, "c"))
