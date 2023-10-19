import { useEffect, useState } from "react"


export const SimpleForm = () => {

    const [formState,setFormState]=useState({
        username:'carlos',
        email:'fer@helpnet.com'
    })

    const {username,email}=formState;

    const onInputChange = ({target})=>{
      const {name, value}=target
      setFormState({
        ...formState,
        [name]:value
      })
    }


    useEffect(()=>{
      console.log('use efect');
    });
  return (
    <>
        <h1>Formulario Simple</h1>
        <input 
        type="text" 
        className="form-control"
        placeholder="User Name"
        name="username"
        value={username}
        onChange={onInputChange}
        />

        <input 
        type="email" 
        className="form-control"
        placeholder="helpnet@pruebas.com"
        name="email"
        value={email}
        onChange={onInputChange}

        />
    </>
  )
}
