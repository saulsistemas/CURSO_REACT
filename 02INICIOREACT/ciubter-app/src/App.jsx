import PropTypes from 'prop-types'
export function App({ title,subtitle }){
    return (
        <>
            <h1>Esto es un Heroe de marvel { title }</h1>
            <h1>Esto es un Heroe de marvel { subtitle }</h1>
           
        </>
    )
}

App.propTypes= {
    title: PropTypes.string.isRequired,
    subtitle:PropTypes.number
}