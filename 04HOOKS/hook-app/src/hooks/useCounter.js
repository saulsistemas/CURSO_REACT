import { useState } from "react"

export const useCounter = (inicialValue = 10)=>{
    const [counter, setcounter] = useState(inicialValue)

    const increment = (value = 1) =>{
        return setcounter(counter+value)
    }
    const decrement = (value = 1) =>{
        if (counter===0) {
            return
        }
        return setcounter(counter-value)
    }
    const reset = () =>{
        return setcounter(inicialValue)
    }
    return{
        counter:counter,
        increment,
        decrement,
        reset
    }   
}