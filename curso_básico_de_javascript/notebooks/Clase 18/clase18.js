function solution(arraySecreto) {
    // Tu código aquí 👈

    return typeof arraySecreto[0] === "string" ? true: false;

  }
  
solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])

console.log("Funcion solucion sobre array 1: " + solution(["Huevo", "Gallina", "Vaca"]));
console.log("Funcion solucion sobre array 2: " + solution([1, "Gallina", "Vaca"]));