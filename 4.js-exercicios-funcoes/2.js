// Equilatero = 3 lados iguais
// Isoceles = 2 lados iguais || 1 lado diferente
// Escaleno = todo lados diferentes 

function wichTriangle (lado1, lado2, lado3) {
  if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
    return 'Escaleno'
  } else if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1) {
    return 'Equilatero'
  } else {
    return 'Isoceles'
  }
}

console.log(wichTriangle(1, 1, 1)) //Eq
console.log(wichTriangle(1, 2, 1)) //  Is
console.log(wichTriangle(1, 2, 3)) // Es