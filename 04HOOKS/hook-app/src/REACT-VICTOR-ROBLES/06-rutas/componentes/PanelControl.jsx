import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <>
    <h1>PanelControl</h1>
    <nav>
        <ul>
            <li>
                <NavLink to="/panel/inicio">Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/panel/crear">Crear Articulos</NavLink>
            </li>
            <li>
                <NavLink to="/panel/gestion">Gestion Usuarios</NavLink>
            </li>
            <li>
                <NavLink to="/panel/acercade">Acerca De</NavLink>
            </li>
        </ul>
    </nav>
    <div>
        {/* quiero cargar aqui los componentes de las subrutas*/}
        <Outlet/>
    </div>
    </>
  )
}
