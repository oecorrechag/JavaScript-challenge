var articulos = ['carro', 'celular', 'moto', 'tv', 'moto', 'libro']; //eliminar moto
console.log('originales ', articulos);

// el primer parámetro especifica el índice del elemento que quiero eliminar,
// en este caso es moto y el segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, 
// en este caso solo uno que es moto ['carro', 'celular', 'tv', 'libro']
articulos.splice(2, 1); 
console.log('Retirando la primera moto ', articulos);


var articulos = ['carro', 'celular', 'moto', 'tv', 'moto', 'libro']; //modificar moto
// se aplican los mismo parámetros, pero esta vez se le agrega el valor al que queremos modificar  
// ['carro', 'celular', 'laptop', 'tv', 'libro']
articulos.splice(2, 1, 'laptop'); 
console.log('Modificando la primera moto ', articulos);
