import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataproyectos } from '../data/dataproyectos';

export const Proyectos = () => {

    const parametrosUrl = useParams();
    const [trabajos,setTrabajos] = useState({})
    
    useEffect(function(){
        
        const proyecto = dataproyectos.filter(function(project){
             return project.id == parametrosUrl.id;
        })
        return setTrabajos(proyecto[0])
        
    },[])
    
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    <h2>{trabajos.nombre}</h2>
                </div>
                <img src={'/images/'+trabajos.id+'.jpg'} className="card-img-top" ></img>
                <div className="card-body">
                    <p className="card-text">{trabajos.descripcion}</p>
                    <a href="https://www.youtube.com/watch?v=CQs8qGbKPVc" target="_blank" className="btn btn-primary">Mayor detalle</a>
                </div>
                <div className="card-footer text-body-secondary">
                {trabajos.tecnologias}
                </div>
            </div>
        </>
    )
}
