
export const Editar = function ({pelicula, conseguirPeliculas,setEditar,setListado}) {
    
    const {id,titulo,descripcion} = pelicula;
    const tituloComponente = "Editar Pelicula";

    const guardarEdicion = function(e,id){
        e.preventDefault();
        const target = e.target;
        //buscar el indice de la pelicual actalizar
        const peliculasAlmacenadas =  conseguirPeliculas();
        const indice = peliculasAlmacenadas.findIndex(function(peli){
            return peli.id === id
        })

        //crear objeto con indice
       const peli_actualizada ={
            id,
            titulo:target.titulo.value,
            descripcion:target.descripcion.value,
       }
       peliculasAlmacenadas[indice] = peli_actualizada
       //console.log(peliculasAlmacenadas[indice] = peli_actualizada);
       localStorage.setItem("pelis",JSON.stringify(peliculasAlmacenadas))
       
       setListado(peliculasAlmacenadas)
       setEditar(0)
    }
    return (
        <>
        <hr />
            <h5>{tituloComponente}</h5>
          
            <form onSubmit={function(e){guardarEdicion(e,id)}}>
                <input type="text"
                    name="titulo"
                    className="form-control"
                    defaultValue={titulo}
                /><br />

                <textarea
                    name="descripcion"
                    className="form-control"
                    defaultValue={descripcion}
                ></textarea><br />

                <input
                    className="btn btn-warning"
                    type="submit"
                    defaultValue="Actualizar" />

            </form>
        </>
    )
}