import { products } from "../../products";
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"

 const ItemListContainer  = ()=>{
    
    const [items, setItems]= useState([]);

    const [error, setError]= useState({})
    
    const {category}=useParams ();

    console.log(category)

    useEffect (()=>{

        const getProucts = new Promise ((resolve, reject)=>{
    //Una peticion que me traiga los productos desde el backend.

    let x= true;

    const productsFiltered= products.filter (product => product.category=== category)
    if (x){
       resolve(category ?productsFiltered : products);
    }
    else{
        reject ({message:"error", codigo:"404"});

    }
       
        
    });
    //Manejar una promesa ele
    getProucts.then((res)=>{
        setItems(res)
    }).catch((error)=>{
        setError(error)
    }) 
    
    },[category])
    
    
    return (<ItemList items={items}/>)
 }

export default ItemListContainer;
