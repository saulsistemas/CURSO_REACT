import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import { Inicio } from '../componentes/Inicio'
import { Contacto } from '../componentes/Contacto'
import { Articulo } from '../componentes/Articulo'
import { Error } from '../componentes/Error'
import { Persona } from '../componentes/Persona'
import { PanelControl } from '../componentes/PanelControl'
import { InicioPanel} from '../componentes/Panel/InicioPanel'
import { Crear} from '../componentes/Panel/Crear'
import { Gestion} from '../componentes/Panel/Gestion'
import { AcercaDe} from '../componentes/Panel/AcercaDe'

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                    <div className="container-fluid">
                        <NavLink to='/inicio' className="navbar-brand" >Mis Peliculas</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink 
                                    className={({isActive})=>isActive?"nav-link active":"nav-link"} 
                                    to='/inicio' aria-current="page">Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                    className={({isActive})=>isActive?"nav-link active":"nav-link"}
                                    to='/articulo'>Artículos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                    className={({isActive})=>isActive?"nav-link active":"nav-link"}
                                    to='/contacto'>Contacto</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                    className={({isActive})=>isActive?"nav-link active":"nav-link"}
                                    to='/panel'>Panel</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/articulo' element={<Articulo />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/persona' element={<Persona />} />
                    <Route path='/persona/:nombre' element={<Persona />} />
                    <Route path='/persona/:nombre/:apellido' element={<Persona />} />
                    <Route path='*' element={<Error/>} />
                    <Route path={'/redirigir'} element={<Navigate to="/persona/carlos/rojas"/>} />
                    <Route path='/panel/*' element={<PanelControl />} >
                        <Route path='inicio' element={<InicioPanel/>} />
                        <Route path='crear' element={<Crear/>} />
                        <Route path='gestion' element={<Gestion/>} />
                        <Route path='acercade' element={<AcercaDe/>} />
                    </Route>

                </Routes>
            </div>
        </BrowserRouter>
    )
}
