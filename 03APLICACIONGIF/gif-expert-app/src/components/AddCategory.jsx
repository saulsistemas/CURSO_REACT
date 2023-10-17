import { useState } from "react"

export const AddCategory= ()=> {
    const [inputValue,setInputValue] = useState('saul');

    const onInputChange =(event)=>{
        console.log(event.target.value);
        setInputValue(event.target.value)
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        console.log(inputValue);
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