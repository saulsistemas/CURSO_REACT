import { useEffect, useState } from "react";

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
        //console.log(peliculas);
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
                                    <a href="#" className="btn btn-primary me-md-2">Editar</a>
                                    <a href="#" className="btn btn-danger">Eliminar</a>
                                </div>
                            </div>
                        </div>
            }): <h2>No hay pelicula</h2>}
        </>
    )
}