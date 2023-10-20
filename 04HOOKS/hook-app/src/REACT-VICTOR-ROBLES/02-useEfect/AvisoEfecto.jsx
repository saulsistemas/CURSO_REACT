import { useEffect } from "react"

export const AvisoEfecto = ({usuario}) => {

    useEffect(() => {
        console.log('El componente AvisoEfecto esta montado');
        
        return ()=>{
            console.log('componente se desmonta');
        }
    }, [])
    
 
  return (
    <div>Saludos {usuario}</div>
  )
}
