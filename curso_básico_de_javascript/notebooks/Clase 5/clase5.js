// Declarativas

function miFuncion(){
   return 3; 
}

miFuncion();

// Expresion
var miFuncion = function(a,b){
    return a + b;
}

miFuncion();


function saludarEstudiante(estudiante){
    // console.log('Hola ${estudiante}')
    console.log("Hola " + estudiante) 
}

saludarEstudiante("Vane");

function sumar(a,b){
    var resultado = a + b;
    return resultado;
}
sumar(1,2);
