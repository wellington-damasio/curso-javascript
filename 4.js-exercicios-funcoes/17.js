
function newSalary (salary, salaryPlan) {
  switch (salaryPlan) {
    case 'a': case 'A':
      console.log(`Novo salário: ${salary + salary * 0.1}`)
      break
    
    case 'b': case 'B':
      console.log(`Novo salário: ${salary + salary * 0.15}`)
      break

    case 'c': case 'C':
      console.log(`Novo salário: ${salary + salary * .2}`)
      break
    
    default:
      console.log('Plano inválido')
  }
}

newSalary(100, 'a')
newSalary(100, 'C')
newSalary(100, 'B')
newSalary(150, 'A')