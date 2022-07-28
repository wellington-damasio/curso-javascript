// Rest (juntar) / Spread (espalhar)

// Usar Spread em Object
const funcionario = {nome: 'Maria', salario: 12349.98}
const clone = {ativo: true, ...funcionario} // pega os atributos (chave/valor) de 'funcionario'  e coloca no 'clone'

console.log(clone)

// Usar Spread com Array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Fernando', ...grupoA]
console.log(grupoFinal)