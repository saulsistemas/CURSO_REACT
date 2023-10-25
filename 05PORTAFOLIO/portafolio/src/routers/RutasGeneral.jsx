import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Servicio } from '../components/Servicio'
import { Curriculum } from '../components/Curriculum'
import { Contacto } from '../components/Contacto'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

export const RutasGeneral = () => {
    return (
        <BrowserRouter>
            {/* HEADRE Y NAVEGACION */}
            <Header/>
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
            <Footer/>
        </BrowserRouter>
    )
}
