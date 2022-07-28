Array.prototype.filter2 =  function () {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) { // se o callback retornar true, você adiciona no array
            newArray.push(this[i])
        }
    }
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const produtoCaro = function (produto) {
    return produto.preco >= 500
}

const produtoFragil = function (produto) {
    return produto.fragil === true
}

const produtosCarosFrageis = produtos.filter2(produtoCaro).filter2(produtoFragil)
console.log(produtosCarosFrageis)