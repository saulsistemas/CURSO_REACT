import PropTypes from 'prop-types'
export function App({ title = "Hulk",subtitle="Naruto",name }){
    console.log(name);
    return (
        <>
            <h1>Esto es un Heroe de marvel { title }</h1>
            <h1>Esto es un Heroe de marvel { subtitle }</h1>
            <h1>Esto es un Heroe de marvel { name }</h1>
           
        </>
    )
}

App.propTypes= {
    title: PropTypes.string.isRequired,
    subtitle:PropTypes.number
}

App.defaultProps = {
    title:"No hay titulo",
    subtitle:123,
    name:"ggg"
}