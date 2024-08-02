
import ProductDetail from "../../Components/ProductDetailk/ProductDetail"



function ItemDetail({item, onAdd}) {
  return (
       <ProductDetail
            key={item.id} title={item.title} price={item.price}
            img={item.img}
            id={item.id}
            onAdd={onAdd}/>

  )
}

export default ItemDetail
