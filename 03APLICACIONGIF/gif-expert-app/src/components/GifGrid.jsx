
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( {category} )=>{

    const {images, isLoading} = useFetchGifs(category);
    
    return (
        <>
            <h1>{ category }</h1>
            {
                isLoading
                ? <h2>...cargando</h2>
                :null
            }

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