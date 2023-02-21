function juega(lanzamiento1, lanzamiento2){
    
    var op1 = "piedra";
    var op2 = "papel";
    var op3 = "tijera";

    if (usuario == pc){
        console.log("Empate!!!");
    } else{
        if (usuario == op1 && pc == op2){
            console.log("Gana pc");
        } else if (usuario == op1 && pc == op3){
            console.log("Ganaste");
        } else if (usuario == op2 && pc == op1){
            console.log("Ganaste");
        } else if (usuario == op2 && pc == op3){
            console.log("Gana pc");
        } else if (usuario == op3 && pc == op1){
            console.log("Gana pc");
        } else if (usuario == op3 && pc == op2){
            console.log("Ganaste");
        }
    }
}

var usuario = 'piedra';
var pc = 'tijera';

juega(usuario, pc)
