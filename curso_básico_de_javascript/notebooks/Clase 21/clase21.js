function solution(estudiantes, deathCount, nuevo) {
    // Tu código aquí 👈
    while(deathCount > 0){
        var student = estudiantes.pop();
        deathCount--;
    }
    var newStudent = estudiantes.push(nuevo);
    return estudiantes;
  }


// Test
solution(["Nico", "Zule"], 0, "Santi")
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
solution(["Nath", "Luisa", "Noru"], 2, "Cami")

console.log("Funcion solucion sobre test 1: " + solution(["Nico", "Zule"], 0, "Santi"));
console.log("Funcion solucion sobre test 2: " + solution(["Juan", "Juanita", "Daniela"], 1, "Julian"));
console.log("Funcion solucion sobre test 3: " + solution(["Nath", "Luisa", "Noru"], 2, "Cami"));

// Prueba
solution(["Nath", "Luisa", "Noru"], 2, "Cami")
console.log("Funcion solucion sobre prueba: " + solution(["Nath", "Luisa", "Noru"], 2, "Cami"));
