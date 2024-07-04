import { products } from "../../products";
import ItemList from "./ItemList"
import { useState, useEffect } from "react"

const ItemListContainer = ()=>{

const [products, setProducts]=useState([]);
const [error, setError]=useState ({})


 const getProducts = new Promise ((resolve,reject)=>{
    let x =true
    if(x){
      resolve(products)
    }
  else{
    reject({message: "error", codigo:"404"}) 
  }
     
 });

getProducts.then((res)=>{
  setProducts(res);
}).catch((error)=>{
  setError({error})
})

console.log(getProducts)
  return  (

    <>
      <ItemList/>
   </>
  )
   
   
  
};

export default ItemListContainer;
