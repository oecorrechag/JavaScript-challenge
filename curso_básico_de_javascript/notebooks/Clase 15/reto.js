function juega(usuario, pc){
    
    var op1 = "piedra";
    var op2 = "papel";
    var op3 = "tijera";

    switch (true){

        case usuario == op1 && pc == op2:
            console.log("Gana pc");
            break;
        case usuario == op1 && pc == op3:
            console.log("Ganaste");
            break;
        case usuario == op2 && pc == op1:
            console.log("Ganaste");
            break;
        case usuario == op2 && pc == op3:
            console.log("Gana pc");
            break;
        case usuario == op3 && pc == op1:
            console.log("Gana pc");
            break;
        case usuario == op3 && pc == op2:
            console.log("Ganaste");
            break;
        default:
            console.log("Empate!!!");
    }
}

var usuario = 'piedra';
var pc = 'tijera';

juega(usuario, pc)