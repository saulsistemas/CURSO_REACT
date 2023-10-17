//1 importaciones
import React from 'react'
import ReactDom from 'react-dom/client'
import {App} from './HelloWorldApp'
import './style.css'
//2componente

//3renderizacion
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App title='Hola Soy goku' subTitle='Hola soy kakaroto'/>
    </React.StrictMode>
)