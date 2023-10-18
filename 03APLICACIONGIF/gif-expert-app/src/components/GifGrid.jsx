import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif"
import { GifItem } from "./GifItem";

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
            
            <div className="card-grid">
                
                    {images.map((image)=>{
                        //console.log(image);
                        return <GifItem
                            key={image.id}
                            {...image}
                        />
                        //return <li key={ image.id }>{ image.title }</li>
                    })}
              
            </div>
        </>
    )
}