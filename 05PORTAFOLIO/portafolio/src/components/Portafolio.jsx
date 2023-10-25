import { ListadoProyectos } from "./ListadoProyectos"


export const Portafolio = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h4 className="display-7 fw-bolder mb-0"><span className="text-primary d-inline">Proyectos</span></h4>
          </div>
          <div className="row gx-5 justify-content-center">

                <ListadoProyectos limite={4}/>


          </div>
        </div>
      </section>
    </div>
  )
}
