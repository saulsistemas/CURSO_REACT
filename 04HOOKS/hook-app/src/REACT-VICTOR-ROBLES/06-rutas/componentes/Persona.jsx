import { useParams } from "react-router-dom"


export const Persona = () => {
    const parametrosPorUrl = useParams()
  return (
    <div>
        <h1>Pagina Personas</h1>
        <h5>Este es el parametro {parametrosPorUrl.nombre} {parametrosPorUrl.apellido}</h5>
        {/* http://localhost:5173/persona/juan/robles */}
    </div>
  )
}
