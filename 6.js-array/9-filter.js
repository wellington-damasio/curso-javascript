const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter( function(p) {
    return p.preco > 500 && p.fragil === true
}))

const produtoCaro = function (produto) {
    return produto.preco >= 500
}

const produtoFragil = function (produto) {
    return produto.fragil === true
}

const produtosCarosFrageis = produtos.filter(produtoCaro).filter(produtoFragil)
console.log(produtosCarosFrageis)