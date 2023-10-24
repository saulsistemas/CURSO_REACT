import { useEffect } from "react";

export const Listado = function ({listado, setListado}) {

    //const [listado, setListado] = useState([]);
    //02) utilizar hooks para cargar nuestra funcion 1 sola vez []
    useEffect(function () {
        conseguirPeliculas()
    }, [])

    //01) crear una funcion
    const conseguirPeliculas = function () {
        const peliculas = JSON.parse(localStorage.getItem('pelis'))
        setListado(peliculas)
        return peliculas;
        //console.log(peliculas);
    }

    const borrarPelicula=function (id){
        //Obtener el listado de peliculas
        const peliculasAlmacenadas = conseguirPeliculas();
        //filtrar las peliculas y devolver todas las que no coinciden con el ID
        const nuevoArrayPeliculas = peliculasAlmacenadas.filter(function(pelicula){
            return pelicula.id !== parseInt(id)
        })
        //actualizar listado con nuevo array
        setListado(nuevoArrayPeliculas)
        //eliminar de localstorage
        localStorage.setItem('pelis', JSON.stringify(nuevoArrayPeliculas))
    }
    return (
        <>
            { listado ? listado.map(function (pelicula) {
                return  <div className="col-md-3" key={pelicula.id}>
                            <div className="card">
                                <div className="card-header">
                                { pelicula.titulo }
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{ pelicula.descripcion }</p>
                                </div>
                                <div className="card-footer">
                                    <button  
                                   
                                    className="btn btn-primary me-md-2">Editar</button>
                                    <button  
                                     onClick={function(){ borrarPelicula(pelicula.id) }}
                                    className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </div>
            }): <h2>No hay pelicula</h2>}
        </>
    )
}