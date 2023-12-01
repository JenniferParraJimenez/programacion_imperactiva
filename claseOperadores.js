// Operadores
let n1 = 10
let n2 = 2

console.log(n1 * n2); // se pueden * + - / % (RESIDUO DE LA DIVISION)
console.log(n1 + n2); // sirve para concatenar
console.log(n1 % n2); // para saber si un numero es par o impar o si es multiplo de otro 

let nombre = "pepe"
let apellido = "parra"
console.log("hola "+ nombre+ " " + apellido); // el mas con los string se concatenan

// template iterals - backticks Interporlar las variables
console.log(`hola ${nombre } ${apellido } como estas`);//control  alt } {

// Comparacion ------> siempre devuelven boleano
let num1 = 15
let num2 = "15"
console.log(num1 < num2); // devuelve un true o un false
console.log(num1 == num2); // en comparaciones simples no tienen en cuenta el tipo de dato
console.log(num1 === num2); // comparacion extricta ya que verifica el tipo de dato
console.log(num1 !== num2); // distintas extricta
console.log(num1 != num2); // comparasion simple

let estaLogueado = false
let usuarioTieneAcceso = estaLogueado === true
