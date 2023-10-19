import { useState } from "react";

export const MiPrimerEstado=()=>{
    //let nombre = "HelpNet";
    
    const[nombre,setNombre]=useState("Help net")
    const cambiarNombre=(e)=>{
        setNombre('carlitos')
    }

    return(
        <>
        <h3>Mi primer estado</h3>
        <h5>{nombre}</h5>
        <button onClick={cambiarNombre} className="btn btn-primary">Click para cambiar el nombre</button>
        </>
    )
}