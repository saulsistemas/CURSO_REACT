import {useState} from 'react'
import PropTypes from 'prop-types'

export function CounterApp({value}) {

    const [counter,setCounter] = useState(value)



    function handleAdd(event){
        setCounter(counter+1)
    };

    return (
        <>
        <h1>Counter App</h1>
        <h2> { counter } </h2>

        <button onClick={ (e)=>handleAdd(e) }>
            +1
        </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}