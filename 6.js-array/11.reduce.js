const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Mateus', nota: 9.2, bolsista: true},
    { nome: 'Ana', nota: 8.7, bolsista: false},
    { nome: 'Maria', nota: 5.6, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce( function(acumulador, valorAtual) {
    console.log(acumulador, valorAtual)
    return Math.round(acumulador + valorAtual)
}, 11)
console.log(resultado) // começa a soma em 11 e vai somando cada elemento do array