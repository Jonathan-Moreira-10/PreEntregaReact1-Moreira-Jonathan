import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductsContainer.css";


const ItemList = ({items}) => {
  
  console.log(items);
  return (
     <div className="products-container" >
      
      {
        items.map((item )=>{
          return (
            <ProductCard
            key={item.id} title={item.title} price={item.price}
            img={item.img}
            id={item.id}
            description={item.description}/>
          )
        })
      }

    </div>
   
  );
};

export default ItemList;
