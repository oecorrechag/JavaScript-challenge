// En este desafío vas a recibir un objeto car como parámetro de la función solution.

// Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la 
// propiedad licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original 
// con la propiedad drivingLicense como true. Si no la tiene, devuelve el objeto original 
// con la propiedad drivingLicense como false.

function solution(car) {
    // Tu código aquí 👈
    if(car.licensePlate === 'Null' || car.licensePlate === undefined){
        car.drivingLicense = false;
    }
    else{
        car.drivingLicense = true;
    }
    return car
  }  

solution({color: 'red', brand: 'Kia',});
solution({color: 'gray', brand: 'Chevrolet', licensePlate: 'AAA111',});
solution({licensePlate: 'RGB255'});

console.log('Test 1: ', solution({color: 'red', brand: 'Kia',}))
console.log('Test 2: ', solution({color: 'gray', brand: 'Chevrolet', licensePlate: 'AAA111',}))
console.log('Test 3: ', solution({ licensePlate: 'RGB255'}))
