// Declarativas
function miFuncion(){
   return 3; 
}

console.log("Funcion declarativa: " + miFuncion());

// Expresion
var miFuncion = function(a,b){
    return a + b;
}

miFuncion();

console.log("Funcion expresion: " + miFuncion(2,5));

// Otros ejemplos

function saludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`);
    console.log("Hola " + estudiante);
}

saludarEstudiante("Vane");

function sumar(a,b){
    var resultado = a + b;
    return resultado;
}
sumar(1,2);
console.log("Suma es igual a: " + sumar(1,2)); 