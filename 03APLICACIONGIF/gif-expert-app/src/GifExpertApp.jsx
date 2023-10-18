import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp =()=>{
    const [categories, setCategories] = useState(['One Punch','Naruto'])
    //console.log(categories);

    const onAddCategories = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }
        //creando una copia de categorias ...categories
        setCategories([newCategory,...categories])
        //setCategories(cate => [...cate,'valorant'])
        console.log(newCategory);
    }
    return(
        <>
        {/*Titulo*/}
        <h1>Hola este es mi primer componente</h1>
        {/*Input*/}
        <AddCategory 
            //setCategories={setCategories}
            onNewCategory = { (value) => onAddCategories(value) }
            currentCtegories = {categories}
        />
        {/*Listado Gif*/}
        <GifGrid/>
        <ol>
            { 
                categories.map((category,indice)=>{
                    return <GifGrid
                    key = { indice }
                    category = { category }
                    />
                    //return <li key={ indice }>{category}</li>
                })
            }
            
        </ol>

        </>
    )
}