var students = ['Maria', 'Sergio', 'Vanesa', 'Andres'];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(students.length > 0){
    console.log(students);
    var student = students.shift();
    saludarEstudiante(student)
}