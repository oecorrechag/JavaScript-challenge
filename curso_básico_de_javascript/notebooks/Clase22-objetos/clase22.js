var miCar = {
    brand: "Mazda",
    model: "3",
    year: 2021,
    detallecar: function(){
        console.log(`Car ${this.model} ${this.year}`);
    }
}

console.log(miCar)
console.log(miCar.brand)
console.log(miCar.detallecar())


