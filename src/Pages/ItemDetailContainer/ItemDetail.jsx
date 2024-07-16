
import ProductDetail from "../../Components/ProductDetailk/ProductDetail"



function ItemDetail({item}) {
  return (
       <ProductDetail
            key={item.id} title={item.title} price={item.price}
            img={item.img}
            id={item.id}/>

  )
}

export default ItemDetail
