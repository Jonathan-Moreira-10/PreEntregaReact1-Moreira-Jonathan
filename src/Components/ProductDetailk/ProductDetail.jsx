import CounterContainer from "../Counter/CounterContainer"


const ProductDetail = ({title,price,img,id, onAdd}) => {
  return (
      
    <>
    
   
      <div className="item-container" style={{border: "2px solid steelblue"}}>
      <h2>{title}</h2>
      <img src={img}/>
      <h3>{price}</h3>
      <h3>{id}</h3>
      <CounterContainer onAdd={onAdd}/>
      </div>

    
   </> 
  )
}

export default ProductDetail
