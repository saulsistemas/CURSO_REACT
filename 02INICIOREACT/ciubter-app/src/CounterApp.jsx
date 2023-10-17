import PropTypes from 'prop-types'

export function CounterApp({value}) {
    function handleAdd(event){console.log(event)};
    return (
        <>
        <h1>Counter App</h1>
        <h2> { value } </h2>

        <button onClick={ (e)=>handleAdd(e) }>
            +1
        </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}