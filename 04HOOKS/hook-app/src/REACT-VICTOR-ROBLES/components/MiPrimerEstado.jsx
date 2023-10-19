import { useState } from "react";

export const MiPrimerEstado=()=>{
    //let nombre = "HelpNet";

    const[nombre,setNombre]=useState("Help net")

    const cambiarNombre=(e,nombre)=>{
        setNombre(nombre)
    }

    return(
        <>
        <h3>Mi primer estado: Hooks useState </h3>
        <h5>{nombre}</h5>
        <input 
        type="text" 
        name="txtname"
        className="form-control"
        onChange={(e)=>{cambiarNombre(e,e.target.value)}}
        />
        <button onClick={(e)=>{cambiarNombre(e,"Help Net Boton")}} className="btn btn-primary">Click para cambiar el nombre</button>
        </>
    )
}