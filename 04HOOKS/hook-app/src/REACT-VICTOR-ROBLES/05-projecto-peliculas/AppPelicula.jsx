import { useState } from "react";
import { Agregar } from "./componentes/Agregar"
import { Buscador } from "./componentes/Buscador"
import { Listado } from "./componentes/Listado"


export const AppPelicula = function () {

    const [listado, setListado] = useState([]);

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Mis Peliculas</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Peliculas</a>
                            </li>
                        </ul>
                        <Buscador
                        listado = {listado}
                        setListado = {setListado}
                        />
                    </div>
                </div>
            </nav>
            <hr />

            <div className="row">
                <div className="col-md-12">
                    <Agregar setListado ={setListado}/>
                </div>
            </div>

            <hr />

            <div className="row">
                <Listado 
                listado = {listado}
                setListado = {setListado}
                />
            </div>

        </div>
    )

}