var articulos = [
    {name: "cama", value: 128},
    {name: "bebedero", value: 13.5},
    {name: "comedero", value: 2.3},
    {name: "pañoleta", value: 7.3},
    {name: "vaso", value: 2.5},
    {name: "coffee", value: 20.7},
    {name: "dosificador", value: 21},
    {name: "tapete", value: 19.7},
    {name: "frisbee", value: 6.8},
]

// filter -> filtra y genera un nuevo arreglo

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.value <= 20
});
console.log(articulosFiltrados);

// map -> mappea y genera un nuevo arreglo

var nombreArticulos = articulos.map(function(articulo){
    return articulo.name
});
console.log(nombreArticulos);

