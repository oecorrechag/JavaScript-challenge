var myCar = {
    brand: "Mazda",
    model: "3",
    year: 2021,
    detallecar: function(){
        console.log(`Car ${this.model} ${this.year}`);
    }
}

console.log(myCar)
console.log(myCar["model"])
console.log(myCar.brand)
console.log(myCar.detallecar())

var propiedad1 = "year"
console.log(myCar[propiedad1])

// agregar una propiedad
myCar.color = "gray machine"
console.log(myCar)

// Cambiar propiedad
myCar.model = "Mazda 3"
console.log(myCar)

