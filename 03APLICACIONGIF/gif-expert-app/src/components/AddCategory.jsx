import { useState } from "react"

export const AddCategory= ({onNewCategory})=> {
    const [inputValue,setInputValue] = useState('');

    const onInputChange =(event)=>{
        //console.log(event.target.value);
        setInputValue(event.target.value)
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        if (inputValue.trim()<=1) {
            return;
        }
        //setCategories(categories=>[inputValue,...categories])
        setInputValue("");
        onNewCategory(inputValue.trim());
    }

    return(
        <form onSubmit={(event)=>{onSubmit(event)}}>
            <input 
                type="text" 
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={(event)=> onInputChange(event) }
            />
        </form>
    )
}