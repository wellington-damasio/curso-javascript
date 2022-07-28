const sequencia = {
    _valor: 1, //convenção para mostrar que a variável deve ser acessada apenas internamente dentro do objeto 'sequencia'

    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    } 
    
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1
console.log(sequencia.valor, sequencia.valor)
