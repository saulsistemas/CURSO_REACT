
export const Editar = function () {
    const tituloComponente = "Editar Pelicula";
    return (
        <>
        <hr />
            <h5>{tituloComponente}</h5>
          
            <form >
                <input type="text"
                    name="titulo"
                    className="form-control"
                /><br />

                <textarea
                    name="descripcion"
                    className="form-control"
                ></textarea><br />

                <input
                    className="btn btn-warning"
                    type="submit"
                    value="Actualizar" />

            </form>
        </>
    )
}