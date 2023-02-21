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
];

// find -> busca dentro el array y si esta lo regresa
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.name === "cama"
});
console.log(encuentraArticulo);

// forEach -> solo filtra pero no guarda en un nuevo array
articulos.forEach(function(articulo){
    console.log(articulo.name);
})

// some -> nuevo array solo con true o false
var articulosBaratos = articulos.some(function(articulo){
    return articulo.value < 5;
});
console.log(articulosBaratos);
