import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Servicio } from '../components/Servicio'
import { Curriculum } from '../components/Curriculum'
import { Contacto } from '../components/Contacto'

export const RutasGeneral = () => {
    return (
        <BrowserRouter>
            {/* HEADRE Y NAVEGACION */}
            {/* CONTENIDO CENTRAL */}
                <Routes>
                    <Route path='/' element={ <Inicio/> } />
                    <Route path='/inicio' element={ <Inicio/> } />
                    <Route path='/portafolio' element={ <Portafolio/> } />
                    <Route path='/servicio' element={ <Servicio/> } />
                    <Route path='/curriculum' element={ <Curriculum/> } />
                    <Route path='/contacto' element={ <Contacto/> } />
                </Routes>
            {/* FOOTER */}

        </BrowserRouter>
    )
}
