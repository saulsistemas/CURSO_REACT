import { dataproyectos } from "../data/dataproyectos"

export const Portafolio = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h4 className="display-7 fw-bolder mb-0"><span className="text-primary d-inline">Proyectos</span></h4>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {dataproyectos.map(function (proyecto) {
                return (
                  <div className="card border-primary mb-3 shadow rounded-1 " key={proyecto.id} >
                    <img src={'/images/'+proyecto.id+'.jpg'} className="card-img-top" ></img>
                    <div className="card-body ">
                      <h5 className="card-title">{ proyecto.nombre }</h5>
                      <p className="card-text">
                        { proyecto.descripcion }
                      </p>
                      <a href={ proyecto.enlace }  target="_blank" className="btn btn-primary">Ir</a>
                    </div>
                    <div className="card-footer bg-transparent border-primary"> {proyecto.tecnologias} </div>
                  </div>

                )

              })}


            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
