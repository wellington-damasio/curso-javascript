// Procedural
processamento(valor1, valor2, valor3)

/*
  O programa é composto por várias funções que processam dados de diferentes maneiras
  Isso pode gerar uma dependecia exagerada entre as funções do programa (se uma não funciona, outras várias também não)
  Como as funções recebem vários dados repetidos, há sempre grande chance de processar dados que não devem ser processados
*/

// Object-Oriented
objeto = {
  valor1,
  valor2,
  valor3,
  processamento( ) {
    // ...
  }
}

objeto.processamento()

/*
  As diferentes partes do programa são armazenadas em objetos
  Objects tem seus próprios dados, valores e funções
  As funções / processamento de dados são invocadas à partir do Object
  Object funciona como cápsula que agrupa comportamentos e atributos
 */

  /* 
 --------------- Princípios Importantes -----------------
  [1.] Abstração
    'Traduzir' um objeto do mundo real (de modo simplificado) para seu código de modo que seja pertinente para o seu software
    Mapear o mundo e trazer isto para seu software

  [2.] Encapsulamento
    Ter detalhes de implementação escondidos e mostrar para uma interface simplificada para o user
    Objetos com baixo nível de encapsulamento geram dependencia entre os objetos do programa 

  [3.] Herança (prototype)
    Herança é receber atributos e comportamentos de um "objeto-pai" 
    Repassar a complexidade de objetos para outros objetos
    Objetos mais simples sendo usados para 'explicar' objetos maiores e complexos
    Relação "É um"  vs  "Tem um"
    Priorize Composição ("tem um") à Herança ("é um")
     
  [4.] Polimorfismo
    Trabalhar, de forma abstrata, com conceitos mais concretos
    A partir de uma variável genérica, trabalhar com elementos mais concretos, sólidos
   */