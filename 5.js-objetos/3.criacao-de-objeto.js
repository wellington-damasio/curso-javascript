// Notação Literal
const obj1 = { }
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object

console.log(obj2)

// Funções Construtoras
function Produto (nome, preco, desconto) {
  this.nome= nome //tornando nome público (pertence à instância)

  this.getPrecoComDesconto = () => {
    return ( preco * (1 - desconto ) ).toFixed(2)
  }
}

const p1 = new Produto ('Caneta', 12.99, 0.5)
const p2 = new Produto ('Banana', 4.50, 0.6)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Funções Factory
function criarFuncionario (nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario () {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('Lorraine', 1200, 2)
const f2 = criarFuncionario('Elvys', 1200, 0)
const f3 = criarFuncionario('Samantha', 1230, 1)

console.log(f1.getSalario(), f2.getSalario(), f3.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome =  'Ana'
console.log(filha)

// Função JSON que retorna Object
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)