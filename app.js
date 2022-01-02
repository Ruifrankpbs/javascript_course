//Variáveis do Tipo Primitivas

var name = "Fulano de Tal"; // Variável do Tipo String
var age = 32; // Variável do tipo integer
var weight = 65.5; // Variável do tipo float
var alive = true; // Variável do tipo boolean
var food = null; // Variável null ou seja diferente de zero
var time; // Variável indefine , ou seja indefinida

// Compostas

var fruits = ["Morango", "Pêra", "Maçã"]; // Array

var person = {
  name: "Rui Frank",
  age: 23,
  alive: true,
  height: 65.5,
}; // object

var person2 = {
  name: name,
  age: 23,
  alive: true,
  height: 65.5,
}; // object...Pode receber variáveis internamente para obter valores

//Utilizando a função console.log para imprimir os valores dentro das variáveis

console.log(age); //Imprimindo variaveis Primitivas
console.log(fruits[0]); //Imprimindo informações dentro de array
console.log(person.height); //imprimindo informações dentro de um object

console.log(person2.name); //imprimindo informações dentro de um object
