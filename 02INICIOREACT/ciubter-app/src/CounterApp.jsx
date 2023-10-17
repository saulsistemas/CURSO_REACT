import {useState} from 'react'
import PropTypes from 'prop-types'

export function CounterApp({value}) {

    const [counter,setCounter] = useState(value)


    function handleAdd(){
        setCounter(counter+1)
    };
    const handleAddSubstract= () => setCounter(counter-1)
    const handleReset= () => setCounter(value)
    

    return (
        <>
        <h1>Counter App</h1>
        <h2> { counter } </h2>

        <button onClick={ (e)=>handleAdd(e) }>+1</button>
        <button onClick={ handleAddSubstract }>-1</button>
        <button onClick={ handleReset }>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}