const arrayNumero = [1,2,3,4,5,6,7,8,9];
const objetoMensaje = {
    nombre:"Juan",
    Apellido: "Rojas"
}

const suma = (a,b)=> a+b;

export function App(){

    return (
        <>
            <h1>Esto es un Array  { arrayNumero }</h1>
            <h1>Esto es un objeto { objetoMensaje.nombre}</h1>
            <h1>Esto es un objeto { JSON.stringify(objetoMensaje)}</h1>
            <h1>esto es una funcion de suma { suma(10,8)}</h1>
        </>
    )
}

