import { Link } from "react-router-dom"
import { dataproyectos } from "../data/dataproyectos"
export const ListadoProyectos = ({limite}) => {
    console.log(limite);
    return (
        <>
            {dataproyectos.slice(0,limite).map(function (proyecto) {
                return (
                    <div className="col-md-6" key={proyecto.id}>
                        <div className="card border-primary mb-3 shadow rounded-1 "  >
                            <Link to={"/proyecto/" + proyecto.id}><img src={'images/' + proyecto.id + '.jpg'} className="card-img-top" ></img></Link>
                            <div className="card-body ">
                                <h5 className="card-title">{proyecto.nombre}</h5>
                                <p className="card-text">
                                    {proyecto.descripcion}
                                </p>
                                <a href={proyecto.enlace} target="_blank" className="btn btn-primary">Ir</a>
                            </div>
                            <div className="card-footer bg-transparent border-primary"> {proyecto.tecnologias} </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
