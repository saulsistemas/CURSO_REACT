//Variables

const nombre = 'Carlos';
const apellido = 'Rojas'
let nombre2 = 'Miguel';
nombre2= 'Pedro'
console.log(nombre,apellido,nombre2);
if(true){
    const nombre = 'Calitos'
    let nombre2 = 'Pedrito'
    console.log(nombre);
    console.log(nombre2);
}
console.log(nombre);
console.log(nombre2);

console.clear();
console.log('=============Objetos Literales=======================');

const persona = {
    nombre:'Carlos',
    apellido:'Ramirez',
    edad: 20,
    direccion: {
        direc:1,
        direc:2
    }
}

console.log(persona);
//clon del objeto
const persona2 = {
    ...persona
};
persona2.nombre = 'Cesar';
console.log(persona2);

