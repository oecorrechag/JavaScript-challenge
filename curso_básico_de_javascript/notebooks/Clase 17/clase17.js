var fruits = ['Apple','Banana','Cherry','strawberry']

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// agrega al final del final del array
var masFruits = fruits.push('grapes')
console.log(fruits);

// borra el elemento final
var masFruits = fruits.pop('grapes')
console.log(fruits);

// agrega al inicio
var nuevaLongitud = fruits.unshift('grapes')
console.log(fruits);

// borrar inicial
var borrarFruit = fruits.shift('grapes')
console.log(fruits);

// position -> retorna el indice, si no lo encuentra devuelve -1
var position = fruits.indexOf('Cherry')
console.log(position);