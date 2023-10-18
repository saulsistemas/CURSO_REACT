import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif"

export const GifGrid = ( {category} )=>{
    console.log(category);
    const [counter,setCounter] = useState(10);

    useEffect(()=>{
        getGif(category)
    },[])
    
    //console.log(category);
    return (
        <>
            <h1>{ category }</h1>
            
            <h5>{ counter }</h5>
            <button onClick={()=>setCounter(counter+1)}>Sumar</button>
        </>
    )
}