// CONDICIONALES    IF max 5  /  TERNARIO max 2 /  SWITCH CASE min 6

const determinarPermisos = (rolUsuario) => {

    if(rolUsuario === "Vendedor"){
        return "tiene permisos de vendedor"
    } 
    else if(rolUsuario === "comprador"){
        return "tiene permisos de comprador"
    }
    else
    {
        return "tiene permisos de administrador"
    }
}
let tienePermiso = determinarPermisos ("")
console.log(tienePermiso);

// TERNARIO
// las funciones expresadas se ponen con const
// Llueve? si lleva paraguas, no, no lleve nichi
const salgoConSombrila = (clima) => {
// condicion ? aca hago lo que quiero cuando se cumpla : aca lo que hago lo que quiero cuando no se cumple
return clima === "lluvioso" ? "si, llevalo" : "no, nichi"
}

let loLlevo = salgoConSombrila("lluvioso")
console.log(loLlevo);

// EJERCICIO CLASE

let edad = 21 
if (edad > 1 & edad < 100) {
 
if(edad < 18) {
console.log("No puede pasar al bar.")
} else if (edad < 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else if (edad == 21){
    console.log("Bienvenido, te felicitamos por ser mayor de edad, puedes pasar y tomar alcohol.")
} 
else if ( edad % 2 ==! 0){
    console.log("¿Sabías que tu edad es impar?")
} 
else {
console.log("Puede pasar al bar y tomar alcohol.")
}
}
else{
    console.log("Eror, edad invalida")
}
