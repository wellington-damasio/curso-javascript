require('./global')

console.log(minhaApp.saudacao())
minhaApp.nome = 'Angela' // Object.freeze() travamos o nome de minhaApp quando declaramos o object ;p
console.log(minhaApp.nome)