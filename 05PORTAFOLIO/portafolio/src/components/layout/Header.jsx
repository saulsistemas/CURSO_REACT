import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 border-bottom pb-3 mb-3">
                <div className="container px-5">
                    <NavLink className="navbar-brand" to="/"><h3><span className="fw-bolder text-primary">SAUL SANTAMARIA RAMOS</span></h3></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/inicio" >Inicio</NavLink></li>
                            <li className="nav-item"><NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/portafolio" >Portafolio</NavLink></li>
                            <li className="nav-item"><NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/curriculum" >Curriculum</NavLink></li>
                            <li className="nav-item"><NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/contacto" >Contacto</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
