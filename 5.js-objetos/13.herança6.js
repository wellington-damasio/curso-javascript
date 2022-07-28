function Aula (nome, videoID) {
    this.nome = nome
    this.videoID =  videoID
}

function Pessoa (nome, idade, peso) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
    
}

const aula1 = new Aula( 'Bem Vindo', 123 )
const aula2 =  new Aula( 'Até Breve', 456 )
console.log(aula1, aula2)

// simulando o new

function novo(f, ...params) {
    const obj = { }
    obj.__proto__ = f.prototype
    f.apply(obj, params) 
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 998)
const aula4 = novo(Aula, 'Bem loco', 187)
const pessoa1 = novo(Pessoa, 'Wellington', 19, 64)
console.log(Pessoa.prototype)
console.log(aula3, aula4, pessoa1)