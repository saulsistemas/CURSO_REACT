import { useState } from "react";


export const MiPrimerFormulario = () => {

    const [usuario,setUsuario] = useState({})

    const conseguirDatosFormularios=(e)=>{
        e.preventDefault()
        let datos = e.target;
        const usuario = {
            nombre:datos.nombre.value,
            apellido:datos.apellido.value,
            genero:datos.genero.value,
            biografia:datos.biografia.value,
        }
        setUsuario(usuario)
        //console.log(usuario);
    }

    const cambiarDatos = (e)=>{
        //sacar el valor de los input
        let nombre_del_input = e.target.name
        //copia
        let usuario_a_modificar = usuario;

        setUsuario(estado_previo =>{
            return{
                //mantenmos todas las propuesdades
                ...estado_previo,
                [nombre_del_input]: e.target.value
            }
        })
        //console.log(usuario_a_modificar);
    }
    const {nombre,apellido,genero,biografia} = usuario;
  return (

    <div className="container">
        <h3>Mi primer Formulario: </h3>
        <form onSubmit={conseguirDatosFormularios}>
            <input 
            name="nombre" 
            onChange={cambiarDatos}
            className="form-control" type="text" />
            <input 
            onChange={cambiarDatos}
            name="apellido" 
            className="form-control" type="text" />
            <select 
            onChange={cambiarDatos}
            name="genero"
            className="form-control"  id="">
                <option value="hombre">Hombre</option>
                <option value="mujer"> Mujer</option>
            </select>
            <textarea 
            onChange={cambiarDatos}
            className="form-control" name="biografia" id="" cols="30" rows="10"></textarea>
            <input className="btn btn-primary" type="submit" value="Evniar" />
        </form>

        <div>
            <table className="table " border={1}>
                <tbody>
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
                </tbody>
            </table>
        </div>
    </div>
  )
}
