import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><NavLink to="/inicio" className="nav-link px-2 text-body-secondary ">Inicio</NavLink></li>
                    <li className="nav-item"><NavLink to="/portafolio" className="nav-link px-2 text-body-secondary">Portafolio</NavLink></li>
                    <li className="nav-item"><NavLink to="/curriculum" className="nav-link px-2 text-body-secondary">Curriculum</NavLink></li>
                    <li className="nav-item"><NavLink to="/contacto" className="nav-link px-2 text-body-secondary">Contacto</NavLink></li>
                </ul>
                <p className="text-center text-body-secondary">© 2023 Saul Santamaria Ramos </p>
            </footer>
        </>
    )
}
