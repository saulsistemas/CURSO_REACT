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

console.clear();
console.log('=============Arreglos=======================');

//const arreglos = new Array();
const arreglos =  [];

//push modifica el objeto princiapl
arreglos.push(1)
arreglos.push(2)
arreglos.push(3)
console.log(arreglos);

const arreglos2 = [1,2,3,4]
console.log(arreglos2);
//... manda cada uno de los elementos
const arreglos3 = [...arreglos2,5]
console.log(arreglos3);

const arreglos4 = arreglos3.map((numero)=>{
    return numero*2
});
console.log(arreglos4);
console.clear();
console.log('=============Desestruturacion=======================');

const heroe = {
    nombreheroe: 'tonny',
    edad:45,
    clave:'Iroman'
}

const {nombreheroe} = heroe;

console.log(nombreheroe);

const retornaPersona  =({nombreheroe, rango='capitan'})=>{
    return {nombreheroe,rango};
}

const {rango} = retornaPersona(heroe);
console.log(rango);
console.log(nombreheroe);
