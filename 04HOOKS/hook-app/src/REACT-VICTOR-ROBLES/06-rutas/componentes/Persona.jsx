import { useNavigate, useParams } from "react-router-dom"


export const Persona = () => {
  const navegar =useNavigate();

  const {nombre = 'Help', apellido='Net'} = useParams()
  const enviar = function(e){
      e.preventDefault();
      const target = e.target;
      const nombre = target.nombre.value;
      const apellido = target.apellido.value;
      const url = '/persona/'+nombre+'/'+apellido;

      (nombre.length <=0 && apellido.length<=0)?navegar("/inicio"):navegar(url)

  }
  return (
    <div>
        <h1>Pagina Personas</h1>
        <h5>Este es el parametro {nombre} {apellido}</h5>
        {/* http://localhost:5173/persona/juan/robles */}
    
        <form onSubmit={enviar}>
          <input type="text" name="nombre" className="form-control" />
          <input type="text" name="apellido" className="form-control" />
          <input type="submit" className="btn btn-success" value="Enviar"/>
        </form>
    </div>
  )
}
