function anoBissexto (ano) {
    const multiploDeQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0

    if( (multiploDeQuatro && !divisivelPorCem) || divisivelPorQuatrocentos ) {
        console.log('Ano Bissexto!')
    } else {
        console.log('Este ano não é bissexto!')
    }
}

anoBissexto(2016)