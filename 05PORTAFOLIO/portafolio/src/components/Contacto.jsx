
export const Contacto = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container px-5">

          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
              <h1 className="fw-bolder">Ponte en contacto</h1>
              <p className="lead fw-normal text-muted mb-0">¡Vamos a trabajar Juntos!</p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">


                <form >

                  <div className="form-floating mb-3">
                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                    <label >Nombre Completo</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                    <label >Correo Electrónico</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                    <label >Celular</label>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..."  data-sb-validations="required"></textarea>
                    <label >Mensaje</label>
                  </div>


                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Enviar
                    </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
