export const GuardarEnLocalStorage= function (clave,pelicula){
    //Conseguir los elementos que ya tenemos en el localStorage

    let elementos = JSON.parse(localStorage.getItem(clave))

    //comprobar si es un array
    if (Array.isArray(elementos)) {
        //agregar objeto nuevo
        elementos.push(pelicula);
    }else{
        elementos = [pelicula]
    }
    //Guardar en el local storage
    localStorage.setItem(clave,JSON.stringify(elementos))
    console.log(elementos);
    return pelicula;
}