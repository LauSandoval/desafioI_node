const fs = require('fs');

function Registrar(nombre, edad, animal, color, enfermedad){
    let file = fs.readFileSync('./citas.json', 'utf-8');
    let data = JSON.parse(file);
    let row = {
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad: enfermedad
    }
    data.push(row);
    fs.writeFileSync('./citas.json',JSON.stringify(data))
}

function Leer(){
    let file = fs.readFileSync('./citas.json', 'utf-8');
    let data = JSON.parse(file);
    return data;
}

function Borrar(){
    fs.writeFileSync('./citas.json',JSON.stringify([]))
}


module.exports = {Registrar, Leer, Borrar}