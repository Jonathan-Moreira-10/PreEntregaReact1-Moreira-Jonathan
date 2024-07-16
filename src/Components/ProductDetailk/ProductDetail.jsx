
const ProductDetail = ({title,price,img,id}) => {
  return (
      
    <>
    
   
      <div className="item-container" style={{border: "2px solid steelblue"}}>
      <h2>{title}</h2>
      <img src={img}/>
      <h3>{price}</h3>
      <h3>{id}</h3></div>

    
   </> 
  )
}

export default ProductDetail
