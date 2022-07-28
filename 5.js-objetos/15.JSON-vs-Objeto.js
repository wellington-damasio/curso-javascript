// JSON = JavaScript Object Notation
const obj = { a: 1, b: 2, c: 3, soma () { return a + b + c}}

console.log(obj)
console.log(JSON.stringify(obj)) // Object -> JSON
//Funções não fazem parte do JSON, portanto são excluidas

//console.log(JSON.parse("{ a: 1, b: 2, c: 3}") )
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}") )
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}') ) // JSON -> Object

console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))

