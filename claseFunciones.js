// ANCHOR -- > FUNCIONES

let nombre = "jennifer";
console.log(nombre);

// FUNCION UNO

function f1(/*aca se pone el parametro*/) { //es obligatorio resotrnar para guardar en una variable cuando se hace alguna operacion o algo 
let edad = 25
console.log(edad); // en esta funcion se pone la variable y en ella misma se pone el consolelog
}
f1() // con solo llamarla la imprime no es necesario consol log porque esta dentro de la funcion

// FUNCION DOS
function suma() {
        return 10*15 // return para devolver el resultado que se genera el ela funscion 
        // los valores se estan poniendo adentro
}
let resultado = suma()
console.log(resultado);

// FUNCION TRES

function saludar() {
    return `hola ${nombre/* nombre esta declarado arriba */} como estas?`//control  alt } {
}
let saludo = saludar()
console.log(saludo);

// Parametros
// FUNCION CUATRO

function saludarParametros(nombreUsuario) {
    return `hola ${nombreUsuario} como estas?`
}
let saludar1 = saludarParametros("Jennifer")// ya no se dejan vacios sino que se pone lo que quiero que sa
console.log(saludar1);

let saludar2 = saludarParametros("Keissy")// ya no se dejan vacios sino que se pone lo que quiero que sa
console.log(saludar2);

let saludar3 = saludarParametros("Sofia")// ya no se dejan vacios sino que se pone lo que quiero que sa
console.log(saludar3);

// FUNCION CINCO

function sumar2 (a=0,b=0) { // (declara un valor por defecto para que no salga nana)es importante el orden
    return a + b;
}
let resultado2 = sumar2(54, 65)
console.log(resultado2);

// EJERCICIO PLAYGROUND
function anterior(num){
    return num - 1
    }


function triple(num){
    return num * 3
    }

function anteriorDelTriple(num){
    resultTriple= triple (num) 
    return resultAnterior = anterior(resultTriple)
    }
    let resultado3 = anteriorDelTriple(3)
    console.log(resultado3);



// forma clásica
function sumaR(a, b) {
    return a + b;
   }
   console.log( sumaR(2, 4) ); // 6
   
   // ES6 arrow function
   let sumaRR = (a, b) => a + b;
   
   console.log( sumaRR(2, 4) ); // 6

   //EJERCIOCIO CLASE

   function test1 (x,y){
    return y - x
}
let resultado9 = test1(10,40)
console.log(resultado9);

function test2 (x,y){
    return  x*2
    console.log(x);
    return x/ 2
}
let resultado8 = test2(10)
console.log(resultado8);


// FUNCION QUE CONVIERTE PULGADAS A CENTIMETROS

function pulgadaCentimetros(pulgada = 0) {
return pulgada * 2.54    
}
resultadoCentimetro = pulgadaCentimetros(2)
console.log(`El valor ingresado equivale a ${resultadoCentimetro} centimetros`);

// FUNCION QUE RECIBE STRING Y LO CONVIERTE EN UNA URL

function stringurl(texto){
    return "http://www."+texto+".com"
    
}
url=stringurl("JENNIFER")
console.log(url);

// FUNCIONES EXPRESADAS
let multiplicar = (numero) => {
    return numero * 10
}
let resultMulti = multiplicar (4)
console.log(resultMulti);

// HOSTING
/* QUE ES? En js se empieza a ejecutar de arriba hacia abajo pero con hostin se va a declarar primero eso que cualquier otra
cosa que tengamos arriba 
Entonces las funciones declaradas tienen un proceso de hosting y las expresadas no ya que se guardan en una val*/

// SCOPE
/* Nos dice el alcance de lad variables
let const tienen scope local
el alcance de donde fue creada, como padres hijos y herencia. osea no puedo usar variables que no estan en mi esfera*/
