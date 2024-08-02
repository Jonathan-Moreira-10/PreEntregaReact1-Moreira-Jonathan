import { Button } from '@mui/material'
import React, { useState } from 'react'

const Checkout = () => {

  const [user, setUser]=useState({nombre:"", email:"",telefono:""});
 


  
  const checkoutOrder=(event)=>{

    event.preventDefault();
   console.log("se envio el formulario");
   console.log(user);
 


  
  
 

  };
  const handleChange=(event)=>{  
    ///event.taget.value
    ///event.taget.name
    /// se esta desestructurando el objeto user, con el spread-operator para utilizar solo el name y el value. De esta forma obtenemos el tipo de imput donde se esta escribiendo y su valor.
    
    // setUser({...user, [event.target.name]:event.target.value});
    let {name,value}= event.target;
    setUser({...user,[name]:value});
  
  };
  

  return (
    <div>
      <h1>Aca va el Checkout</h1>
      <form onSubmit={checkoutOrder}>
        <input type="text" placeholder='Ingrese su nombre' onChange={handleChange}
        name="nombre"/>
        <input type="email" placeholder='Ingrese su email'onChange={handleChange} name="email" />
        <input type="number" placeholder='Ingrese su numero de telefono'onChange={handleChange} name="telefono" />
        <button>Enviar</button>
        <button type='button'>Cancelar</button>

      </form>
    </div>
  )
}

export default Checkout
