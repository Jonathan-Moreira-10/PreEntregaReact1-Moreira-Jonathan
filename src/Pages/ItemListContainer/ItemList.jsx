

const ItemList = ({products}) => {
  
  console.log(products);
  return (
     <div style={{display: "flex", gap: "20px"}}>
      
      
        {products.length > 0 ? <h1>{products[0].title}</h1>:null} 
      
      

    </div>
   
  )
}

export default ItemList;
