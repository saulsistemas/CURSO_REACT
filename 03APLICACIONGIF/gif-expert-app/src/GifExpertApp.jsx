import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp =()=>{
    const [categories, setCategories] = useState(['One Punch','Naruto'])
    //console.log(categories);

    const onAddCategories = () => {
        //creando una copia de categorias ...categories
        setCategories(['Hola Mundo',...categories])
        //setCategories(cate => [...cate,'valorant'])
    }
    return(
        <>
        {/*Titulo*/}
        <h1>Hola este es mi primer componente</h1>
        {/*Input*/}
        <AddCategory setCategories={setCategories}/>
        {/*Listado Gif*/}
        <ol>
            { 
                categories.map((category,indice)=>{
                    return <li key={ indice }>{category}</li>
                })
            }
            
        </ol>

        </>
    )
}