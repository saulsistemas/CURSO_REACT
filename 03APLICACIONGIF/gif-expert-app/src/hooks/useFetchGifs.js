import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGifs = (category) =>{
    const [images,setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const getImges= async() =>{
        const newImages = await getGif(category);
        setImages(newImages)
        setIsLoading(false)
    }
    useEffect(()=>{
        getImges();
        
    },[])

    return{
        //images:images,
        images,
        isLoading:isLoading
    }
}
