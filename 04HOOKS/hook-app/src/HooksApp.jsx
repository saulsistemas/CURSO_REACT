import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook"
import { SimpleForm } from "./02-useEffect/SimpleForm"
import { MiPrimerEstado } from "./REACT-VICTOR-ROBLES/01-useState/MiPrimerEstado"
import { MiPrimerEfecto } from "./REACT-VICTOR-ROBLES/02-useEfect/MiPrimerEfecto"
import { MiPrimerAjax } from "./REACT-VICTOR-ROBLES/03-Ajax/MiPrimerAjax"
import { MiPrimerFormulario } from "./REACT-VICTOR-ROBLES/04-formularios/MiPrimerFormulario"
import { AppPelicula } from "./REACT-VICTOR-ROBLES/05-projecto-peliculas/AppPelicula"
import { RouterPrincipal } from "./REACT-VICTOR-ROBLES/06-rutas/routers/RouterPrincipal"

export const HooksApp = () =>{
    return(
        <>
        <RouterPrincipal/>
        {/*<AppPelicula/>
        <MiPrimerFormulario/>
        <MiPrimerAjax/>
        <MiPrimerEfecto/>
        <MiPrimerEstado/>
         <h1>Hooks App</h1>
        <SimpleForm/>
        <hr />
        <CounterWithCustomHook/>
        <hr />
        <CounterApp/> */}
        </>
    )
}