import { useContext, useEffect,useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products";
import {useParams} from "react-router-dom";
import { CartContext } from "../../Context/CartContext";


const ItemDetailContainer = () => {
// dame el contexto

 const {addToCart}=useContext(CartContext);
  const {id} = useParams();


  const [item, setItem]=useState({});
  
  useEffect(()=>{
    let product= products.find((product)=>product.id === +id);
   
    if(product){
        setItem(product);
    }

},[id]);
//Información del producto.
//Informacion de cuantas unidaddes.

 const onAdd =(quantity)=>{

    let objetoFinal= {...item,quantity: quantity};
   addToCart(objetoFinal);
   console.log(objetoFinal)

 }

    return  <ItemDetail item={item} onAdd={onAdd}/>;
  
}

export default ItemDetailContainer
