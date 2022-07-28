function objetoInvertido (obj) {
    const objectInvertido = {}

    Object.entries(obj).forEach( parChaveValor => {
        const chave = 0,
                  valor = 1

        objectInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })

    return objectInvertido
}

console.log(objetoInvertido({a: 1, b: 2, c: 3, d: 4}))

function inverterObjeto (object) {
    const paresDeChaveValorInvertidos = Object.entries(object).map(parChaveValor => parChaveValor.reverse())

    return Object.fromEntries(paresDeChaveValorInvertidos)
}

console.log(inverterObjeto({a: 1, b: 2, c: 3, d: 4}))