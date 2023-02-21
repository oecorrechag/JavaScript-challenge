// objetos
function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// array para guardar autos creados
var cars = [];

for(var i=1; i <=30; i++){
    var brand = prompt("Insert brand");
    var model = prompt("Insert model");
    var year = prompt("Insert year");

    cars.push(new Car(brand, model, year));
}

for(var i = 0 ; i < cars.length ; i++){
    console.log(cars[i]);
}

