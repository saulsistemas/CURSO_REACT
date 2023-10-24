import { useState } from "react"


export const Buscador = ({listado,setListado}) => {
    
    const [buscar,setBuscar] = useState('')
    const [encontrado,setEncontrado] = useState(false)

    const buscarPelicula = function (e){
        const textoBuscar =  e.target.value
        //crear estado y actualizarlo
        setBuscar(textoBuscar)
        //filtrar para buscar coincidencias
        let peliculasEncontradas =listado.filter(function(pelicula){
            return pelicula.titulo.toLowerCase().includes(buscar.toLocaleLowerCase())
        })
        
        console.log(peliculasEncontradas);
        //comprobar si hay un resultado
        if(buscar.length<=1 || peliculasEncontradas.length<=0){
            peliculasEncontradas = JSON.parse(localStorage.getItem('pelis'))
            setEncontrado(true)
        }else{
            setEncontrado(false)
        }
        
        //console.log(peliculasEncontradas);
        //listar peliculas
        setListado(peliculasEncontradas)

        //dar valor al localostorage
    }

    return (
        <>
        {(encontrado && buscar.length> 1) ? "No hay datos":""}
            <form className="d-flex">
                <input 
                name="busqueda"
                type="text" 
                autoComplete="off"
                onChange={buscarPelicula}
                className="form-control me-2" />
                <button className="btn btn-success" type="submit">Search</button>
            </form>
        </>
    )
}
