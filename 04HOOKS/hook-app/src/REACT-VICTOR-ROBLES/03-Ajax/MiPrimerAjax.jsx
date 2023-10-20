import { useEffect, useState } from "react"


export const MiPrimerAjax =()=>{

    const [usuarios,setUsuarios] = useState([])
    const getUSuarios = ()=>{
        setUsuarios([
            {
            "id": 1,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
            "id": 2,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
            "id": 3,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
        ])
    }
    const getUsuariosAjax = ()=>{
        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(resultado_final => {
                setUsuarios(resultado_final.data)
                console.log(resultado_final.data)
            },
            error => console.log(error)
            )
    }
    useEffect(() => {
        getUsuariosAjax();
    }, [])
    //console.log(getUsuariosAjax());
    return(
        <div className="container">
            <h3>Mi primer Ajax: Hooks Ajax </h3>
            <ol>
                {

                    usuarios.map(({id,first_name,last_name ,email})=>{
                        return <li key={id}>{first_name}</li>
                    })
                }
            </ol>
        </div>
    )
}