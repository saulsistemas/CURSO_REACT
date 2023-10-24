import { useState } from "react";
import { GuardarEnLocalStorage } from "../helpers/GuardarEnStorage";

export const Agregar = () => {
    const tituloComponente = "Añadir Pelicula";

    const [pelicula,setPeliculas] = useState({});

    //Desestructuracion del objeto
    const {titulo,descripcion} = pelicula;

    const conseguirDatosForm=function(e){
        e.preventDefault();
        
        // 1) conseguir datos del formulario
        const target    = e.target;
        const titulo      = target.titulo.value;
        const descripcion = target.descripcion.value;

        // 02)crear objeta de la peliucula
        const pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }
        setPeliculas(pelicula);
        //Guardar en el localStorage
        GuardarEnLocalStorage('pelis',pelicula);

        
    }
    
    
    
    return (
        <>
            <h5>{ tituloComponente }</h5>
            {(titulo && descripcion) && " Has creado la pelicula "+titulo}
            <form onSubmit={conseguirDatosForm}>
                <input type="text" 
                name="titulo" 
                className="form-control" 
                /><br />

                <textarea 
                name="descripcion" 
                className="form-control"
                ></textarea><br />

                <input 
                className="btn btn-primary" 
                type="submit" 
                value="Enviar" />

            </form>
        </>
    )
}
