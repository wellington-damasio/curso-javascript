function anoBissexto (ano) {
  if (ano % 400 == 0) {
    console.log('Este ano é definitivamente bissexto')
  } else if (ano % 4 == 0 && ano % 100 != 0) {
    console.log('Este ano é bissexto')
  } else {
    console.log('Este ano não é bissexto')
  }
}

anoBissexto(2016)
anoBissexto(1988)
anoBissexto(2000)
anoBissexto(2004)
anoBissexto(2024)
anoBissexto(2028)
anoBissexto(2032)
anoBissexto(2033)
