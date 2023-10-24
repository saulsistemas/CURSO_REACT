

export const AppPelicula = function () {

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
                        <form className="d-flex">
                            <input type="text" className="form-control me-2" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <hr />

            <div className="row">
                <div className="col-md-12">
                    <form action="">
                        <input type="text" className="form-control" name="titulo" /><br />
                        <textarea name="titulo"   className="form-control"></textarea><br />
                        <input className="btn btn-primary" type="submit" value="Enviar" />
                    </form>
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary me-md-2">Editar</a>
                            <a href="#" className="btn btn-danger">Eliminar</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary me-md-2">Editar</a>
                            <a href="#" className="btn btn-danger">Eliminar</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary me-md-2">Editar</a>
                            <a href="#" className="btn btn-danger">Eliminar</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary me-md-2">Editar</a>
                            <a href="#" className="btn btn-danger">Eliminar</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}