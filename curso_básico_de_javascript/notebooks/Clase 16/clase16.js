
function solution(article) {
    // Tu código aquí 👈

    switch (true){
        case article == "computadora":
            return "Con mi computadora puedo programar usando JavaScript";
            break;
        case article == "celular":
            return"En mi celular puedo aprender usando la app de Platzi";
            break;
        case article == "cable":
            return"¡Hay un cable en mi bota!";
            break;
        default:
            return "Artículo no encontrado";
    }
  }

solution('computadora')
solution('celular')
solution('cable')
solution('ornitorrinco')

console.log(solution('computadora'));
console.log(solution('celular'));
console.log(solution('cable'));
console.log(solution('ornitorrinco'));
