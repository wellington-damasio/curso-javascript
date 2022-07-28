function salario (horasTrabalhadas, valorHora) {
    return `Salário igual a R$${ (horasTrabalhadas * valorHora).toFixed(2).replace('.',',') }`
}

console.log(salario(160, 6.30))