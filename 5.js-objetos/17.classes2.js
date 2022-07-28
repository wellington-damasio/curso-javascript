class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //chamar a função construtora do Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva', 'Bombeiro')
    }
}

const filho = new Filho
console.log(filho)

const pai = new Pai('Silva')
console.log(pai)

const avo = new Avo('Silva')
avo.profissao = 'Marceneiro'
console.log(avo)