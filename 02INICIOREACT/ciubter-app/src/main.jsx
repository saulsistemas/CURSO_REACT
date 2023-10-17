//1 importaciones
import React from 'react'
import ReactDom from 'react-dom/client'
import {App} from './HelloWorldApp'
//2componente

//3renderizacion
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)