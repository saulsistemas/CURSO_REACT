import { useEffect, useState } from "react"

export const MiPrimerEfecto = () => {
    const[usuario,setUsuario]=useState("Carlitos")

    const modUsuario=({target})=>{
        setUsuario(target.value)
    }

    const [fecha,setFecha]=useState(Date())
    
    const modFecha=()=>{
        setFecha(Date.now())
    }
    // useEffect es un gancho que le permite realizar efectos secundarios en un componente funcional.
    //Solo se ejecuta una vez cuando colocas []
    useEffect(()=>{
        console.log('has cambiado');
    },[])
    useEffect(()=>{
        console.log('has modificado el usuario');
    },[usuario])

    return (
        <div className="container">
        <h3 className="label">Mi primer efecto: Hooks useEffect </h3>
        <h5>{usuario}</h5>
        <p>
            <input 
            type="text"
            className="form-control"
            onChange={modUsuario}
            />
        <h5>{fecha}</h5>
            <button
            onClick={modFecha}
            className="btn btn-primary"
            >Cambiar fecha</button>
        </p>

        </div>
    )
}
