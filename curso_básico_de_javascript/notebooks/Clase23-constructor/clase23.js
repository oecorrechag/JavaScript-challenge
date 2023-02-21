function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var car_carlos = new Car("Ford", "Fiesta", 2010);
var car_maria = new Car("Renault", "Captur", 2015);
var car_catalina = new Car("Mazda", "CX30", 2022);

console.log(car_carlos);
console.log(car_maria);
console.log(car_catalina);
