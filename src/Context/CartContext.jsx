import { createContext, useState } from "react";



export const CartContext = createContext( )

export const CartContextProvider = ({children}) => {

 const [cart, setCart]= useState([]);

 const addToCart =(product)=>{
  //Aca utilizamos el some para verificar si alguno de los productos de array hace mach con el id del producto que queremos utilizar, pero de forma resumida y mas corta.
 let existe = cart.some(el=>el.id===product.id) 
 if(existe){
  //El Map siempre devuelve un arreglo nuevo con la misma Length que el original.
 let newArray= cart.map((el)=>{
  if(el.id===product.id){
    //Se retorna el producto modificado
    return {...el,quantity:el.quantity+product.quantity}
  }else{
     //Se retorna el producto como estaba
    return el;
  }
  
 });
 setCart(newArray)
 }
  
 
else{
  setCart([...cart,product]);
  //hago otra cosa
  
}


 };console.log(cart)
 //Función para verificar si existe el producto a agregar segun su id.

// const isInCart= (id)=>{
//  let elemeto= cart.some((product)=>product.id===+id)
//  return existe 
// }


 const clearCart =()=>{
 setCart([])
 //Necesito una funcion 
 //Que elimine cada producto por separado,
 //total del precio
 //cantidad de productos
 };

 const deletProduct=(id)=>{
  //El metodo filter siempre devuelve un nuevo array y puede ser de otra longitud.

  let newArray= cart.filter((el)=>el.id!==id)
  //En este caso la funcion del filter busca todos los elementos cuyo id sea distinto del id que queremos eliminar y crea un nuevo array con todos los productos diferentes al mismo; al final setea el cart con el nuevo array. Siempre se utiliza este metodo filter para eliminar cosas de un array.
  setCart(newArray)
 }

let data ={cart, addToCart, clearCart, deletProduct};


  return <CartContext.Provider value={data}> {children}</CartContext.Provider>
  
  
};


