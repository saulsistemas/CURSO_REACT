import { useState } from "react";


export const MiPrimerFormulario = () => {

    const [usuario,setUsuario] = useState({})

    const conseguirDatosFormularios=(e)=>{
        e.preventDefault()
        let datos = e.target;
        const usuario = {
            nombre:datos.txtnombre.value,
            apellido:datos.txtapellido.value,
            genero:datos.txtgenero.value,
            biografia:datos.txtbiografia.value,
        }
        setUsuario(usuario)
        console.log(usuario);
    }
    const {nombre,apellido,genero,biografia} = usuario;
  return (

    <div className="container">
        <h3>Mi primer Formulario: </h3>
        <form onSubmit={conseguirDatosFormularios}>
            <input 
            name="txtnombre" 
            className="form-control" type="text" />
            <input 
            name="txtapellido" 
            className="form-control" type="text" />
            <select 
            name="txtgenero"
            className="form-control"  id="">
                <option value="hombre">Hombre</option>
                <option value="mujer"> Mujer</option>
            </select>
            <textarea className="form-control" name="txtbiografia" id="" cols="30" rows="10"></textarea>
            <input className="btn btn-primary" type="submit" value="Evniar" />
        </form>

        <div>
            <table className="table " border={1}>
                <tr>
                    <td>Su nombre es: {nombre}</td>
                    <td>Su apellido es: {apellido}</td>
                    <td>Su genero es: {genero}</td>
                        
                    {biografia && biografia.length>=2&&
                        <td>
                           Su briografía es:  {biografia}
                            
                        </td>
                    
                    }
                </tr>
            </table>
        </div>
    </div>
  )
}
