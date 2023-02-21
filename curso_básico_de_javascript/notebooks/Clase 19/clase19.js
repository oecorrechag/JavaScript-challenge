var students = ['Maria', 'Sergio', 'Vanesa', 'Andres']

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`)
}

for (var i=0; i< students.length; i++){
    saludarEstudiante(students[i])
}

console.log('*****')

for (var student of students){
    saludarEstudiante(student)
}
