import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif"

export const GifGrid = ( {category} )=>{
    const [images,setImages] = useState([]);
    
    const getImges= async() =>{
        const newImages = await getGif(category);
        setImages(newImages)
    }

    useEffect(()=>{
        getImges();
        
    },[])
    
    //console.log(images);
    return (
        <>
            <h1>{ category }</h1>
            
            <ol>
                
                    {images.map(({id,title})=>{
                        //console.log(image);
                        return <li key={ id }>{ title }</li>
                    })}
              
            </ol>
        </>
    )
}