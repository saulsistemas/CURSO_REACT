import React from 'react'
import { Routes, Route, BrowserRouter, NavLink, Navigate } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
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
                    <Route path='/' element={ <Navigate to='/Inicio'/> } />
                    <Route path='/inicio' element={ <Inicio/> } />
                    <Route path='/portafolio' element={ <Portafolio/> } />
                    <Route path='/curriculum' element={ <Curriculum/> } />
                    <Route path='/contacto' element={ <Contacto/> } />
                    <Route path='/proyecto' element={ <Contacto/> } />
                    <Route path='*' element={ <h1>Página no existe Error | 404 </h1> } />
                </Routes>
            {/* FOOTER */}
            <Footer/>
        </BrowserRouter>
    )
}
