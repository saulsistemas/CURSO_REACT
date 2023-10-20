import { useEffect, useState } from "react"
import { AvisoEfecto } from "./AvisoEfecto"

export const MiPrimerEfecto = () => {
    const[usuario,setUsuario]=useState("Carlitos")

    const modUsuario=({target})=>{
        setUsuario(target.value)
    }

    const [fecha,setFecha]=useState(Date())
    
    const modFecha=()=>{
        setFecha(Date.now())
    }

    const [contador,setContador]=useState(0);

    // useEffect es un gancho que le permite realizar efectos secundarios en un componente funcional.
    //Solo se ejecuta una vez cuando colocas []
    useEffect(()=>{
        console.log('has cambiado');
    },[])
    useEffect(()=>{
        setContador(contador+1)
        console.log('has modificado el usuario '+contador);
    },[fecha,usuario])

    return (
        <div className="container">
        <h3>Mi primer efecto: Hooks useEffect </h3>
        <h5 className={contador>=10?"badge bg-success":"badge bg-primary"}>{usuario}</h5>
        
            <input 
            type="text"
            className="form-control"
            onChange={modUsuario}
            />
        <h5 className={contador>=10?"badge bg-success":"badge bg-primary"}>{fecha}</h5>
            <button
            onClick={modFecha}
            className="btn btn-primary"
            >Cambiar fecha</button>
        {usuario=='HELPNET' && <AvisoEfecto usuario={usuario}/>}

        </div>
    )
}
