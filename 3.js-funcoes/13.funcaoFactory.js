// Função Factory é uma função usada para criar Objetos personalizados de forma repetida

// Factory Simples
function criarPessoa ( ) {
  return {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 45,
    peso: 66
  }
}

console.log(criarPessoa( ))

// Factory Personalizável
function criarPessoa2 (nome, sobrenome, idade, peso) {
  return {
    nome,
    sobrenome,
    idade,
    peso
  }
}

console.log(criarPessoa2('João', 'Pedro', 19, 67))

const Mateus = criarPessoa2('Mateus', 'Pereira', 19, 67)
const Maria = criarPessoa2('Maria', 'Eduarda', 27, 66)
const Eduardo = criarPessoa2('Eduardo', 'Sisifo', 26, 78)

console.log(Mateus, Maria, Eduardo)