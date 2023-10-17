import { useState } from "react"

export const GifExpertApp =()=>{
    const [categories, setCategories] = useState(['One Punch','Naruto'])
    console.log(categories);
    return(
        <>
        {/*Titulo*/}
        <h1>Hola este es mi primer componente</h1>
        {/*Input*/}
        <ol>
            { 
                categories.map((category,indice)=>{
                    return <li key={ indice }>{category}</li>
                })
            }
            
        </ol>
        {/*Listado Gif*/}

        </>
    )
}