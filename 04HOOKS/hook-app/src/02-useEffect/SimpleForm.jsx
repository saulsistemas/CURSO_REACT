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

    //EL [] indica que se dispare una sola vez
    useEffect(()=>{
      console.log('use efect');
    },[]);

    useEffect(()=>{
      console.log('Formstate Changed');
    },[formState]);

    useEffect(()=>{
      console.log('email changed!!');
    },[email])
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
