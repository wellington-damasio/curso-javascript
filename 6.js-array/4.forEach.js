const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, arrayDoElemento) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(arrayDoElemento)
})

aprovados.forEach((nome, indice) => console.log(indice))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados) // cara cada elemento do array, executar a função exibirAprovados