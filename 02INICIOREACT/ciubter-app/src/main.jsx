//1 importaciones
import React from 'react'
import ReactDom from 'react-dom/client'

//2componente
function App(){
    return (<h1>Hola mundo!!!!</h1>)
}
//3renderizacion
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)