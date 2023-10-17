//1 importaciones
import React from 'react'
import ReactDom from 'react-dom/client'
import './style.css'
import {App} from './App'
import { CounterApp } from './CounterApp'
//2componente

//3renderizacion
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App title="Iroman" subtitle = {123}/>
        <CounterApp value ={10}/>
    </React.StrictMode>
)