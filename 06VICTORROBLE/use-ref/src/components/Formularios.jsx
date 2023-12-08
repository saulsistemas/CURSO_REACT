import React, { useRef } from 'react'

export const Formularios = () => {

    const nombre = useRef();
    const apellido = useRef();
    const email = useRef();
    const miCaja = useRef();

    const mostrar = function (e){
        e.preventDefault();

        console.log(nombre.current.value);
        console.log(apellido.current.value);
        console.log(email.current.value);
        let {current: caja}= miCaja;
        caja.classList.add("border-success")
        caja.innerHTML = "Formulario Enviado"
    }

  return (
    <div>
        <div ref={miCaja} className='card border-primary'>
            prueba ref
        </div>
        <h1>Formularios</h1>
        <form onSubmit={mostrar}>
            <input type="text" placeholder='nombre' ref={nombre}/> <br />
            <input type="text" placeholder='apellido' ref={apellido}/><br />
            <input type="text" placeholder='correo electronico' ref={email}/><br />
            <input type="submit" value="enviar" /><br />
        </form>
    </div>
  )
}
