let minombre = "Jennifer"; //declara variable
let x = "modificado";

console.log(minombre); //mostrame por consola
// control s para identación
// para ejecutar se hace con node archivo js

console.log(x);
// Clase VARIABLES
// let - const (bp mayuscula)
let edad = 30;
let nombre = "jennifer";
const apellido = "parra"

// log para crear el consolelog rapido
console.log(edad,nombre, apellido);

// reasignar valor a la variable solo se puede hacer con las variables asignadas con let - las variables asignadas con const son fijas y se escribe en mayuscula
edad = edad +1
console.log(edad)

// control kc para comentar y contro ku para descomentar ********

// Tipos de datos

// string cadena de texto ""
let frase = "hola 'amiguito' como estas"

// numbers 
let altura = 1.68 // flotante cuando tiene decimales los numeros son sin comillas
let precio = 500 // entero
precio = 5 * precio
console.log(precio);

console.log(typeof altura); // me dice el tipo de variable

// boleanos -> condicionar al sistema
let elUsuarioEstaLougueado = true // la respuesta que me gustaria que saliera


// Otro tipos de datos y son respuestas ante algo

//undefined

let nombreDeUsuario1 = undefined // porque aun no se le a ingresado un valor

// null

let nombreDeUsuario = null // o undefinido, porque aun no se le a ingresado un valor
// NaN no a number no tiene numero
let a = 15
let b = "hola mor"
let c = a*b
console.log(c); //resultado NaN

// EJERCICIO FIABRERIA 
let temperatura = 30
console.log(typeof temperatura)
let llueve = false
console.log(typeof llueve)
let pisoAscencsor = 9
console.log(typeof pisoAscencsor)
let hora = 9
console.log(typeof hora)
let horaAbierto = 7
console.log(typeof horaAbierto)
let horaCerrado = 7
console.log(typeof horaCerrado)
let cantidadQueso = 100
console.log(typeof cantidadQueso)
let deuda = 20000
console.log(typeof deuda)
console.log(temperatura, llueve, pisoAscencsor, hora, horaAbierto, horaCerrado, cantidadQueso, deuda)

// Caso cotidiano IR A LA UNIVERSIDAD
let apagarCalefactor = true
console.log(typeof apagarCalefactor)
let pronostico = false
console.log(typeof pronostico)
let tanquear = true
console.log(typeof tanquear)
let galones = 2
console.log(typeof galones)
let valorgasolina = 20000
console.log(typeof valorgasolina)
let pagoEfectivo = false
console.log(typeof pagoEfectivo)
let datosMoviles = true
console.log(typeof datosMoviles)
let pagoExitoso = true
console.log(typeof pagoExitoso)
console.log(apagarCalefactor, pronostico, tanquear, galones, valorgasolina, pagoEfectivo, datosMoviles, pagoExitoso)

// Desafio EXTRA
let pantalones = "rameras"
let rameras = "pantalones"

let vartemp = pantalones
pantalones = rameras
rameras = vartemp

console.log(pantalones);
console.log(rameras);

