const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Mateus', nota: 9.2, bolsista: true},
    { nome: 'Ana', nota: 8.7, bolsista: false},
    { nome: 'Maria', nota: 5.6, bolsista: true},
]

// Imperativo
let total = 0
for (let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota
}

console.log(total.toFixed(2))

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const resultado = alunos.map(getNota).reduce(soma)