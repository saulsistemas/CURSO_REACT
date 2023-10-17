import PropTypes from 'prop-types'

export function CounterApp({value}) {
    return (
        <>
        <h1>Counter App</h1>
        <h2> {value} </h2>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}