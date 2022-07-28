const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Mateus', nota: 9.2, bolsista: true},
    { nome: 'Ana', nota: 8.7, bolsista: false},
    { nome: 'Maria', nota: 5.6, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas?
    const getBolsista = alunos.map(e => e.bolsista)
    console.log(getBolsista)

    const todosBolsistas = getBolsista.reduce( (acumulador, valorAtual) => {
        return acumulador && valorAtual
    })

    console.log(todosBolsistas)
// Desafio 2: Algum aluno é bolsista?

const algumBolsista = getBolsista.reduce( (acumulador, valorAtual) => {
    return acumulador || valorAtual
})

console.log(algumBolsista)