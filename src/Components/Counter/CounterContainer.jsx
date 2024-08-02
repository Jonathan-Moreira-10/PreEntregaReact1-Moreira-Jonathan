import { useState } from "react"
import Counter from "./Counter";

const CounterContainer = ({onAdd}) => {
 
 const [contador, setContador]=useState(1);
 const sumar= ()=>{
  setContador(contador + 1);
 };

 const restar = ()=>{
  if (contador > 1){
    setContador(contador - 1);
  }
  else {
    alert ("minimo")
  }
 };
 
  return  <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd}/>
   
  //  <div>
  //   <button onClick={restar}>restar</button>
  //   <h2>{contador}</h2>
  //   <button onClick={sumar}>sumar</button>

  //  </div>
  ;
}

export default CounterContainer;
