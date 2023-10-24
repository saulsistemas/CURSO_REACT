import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../componentes/inicio'
import { Contacto } from '../componentes/Contacto'
import { Articulo } from '../componentes/Articulo'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/articulo' element={<Articulo/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='*' element={<h1> Error | 404 </h1> } />

        </Routes>
    </BrowserRouter>
  )
}
