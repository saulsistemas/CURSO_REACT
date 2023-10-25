import { ListadoProyectos } from "./ListadoProyectos"

export const Inicio = () => {
  return (
    <div>
      <section className="d-flex justify-content-center mt-5 mt-xxl-0">
        <div className="row">
          <div className="col-md-12">
            <img src={"/images/saul-santamaria.gif"} alt="" />
          </div>
        </div>
      </section>
      <hr />
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h4 className="display-7 fw-bolder"><span className="text-primary d-inline">Sobre mi</span></h4>
                <p className="text-muted">
                  Soy un profesional con años de experiencia en el área de TI, he sido capaz de adaptarme a los diferentes planes informáticos de las
                  empresas para las que he trabajado. Adicionalmente, cuento con una gran capacidad de análisis de la información, capacidad de
                  adaptación, aprendizaje rápido y excelente capacidad de comunicación, dispuesto a trabajar y aprender para lograr las metas y objetivos
                  trazados por la empresa.
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                  <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                  <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <ListadoProyectos limite={2}/>

          </div>
        </div>
      </section>
    </div>
  )
}
