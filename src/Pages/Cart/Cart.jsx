import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const Cart = () => {

 const {cart, clearCart, deletProduct}=useContext(CartContext);

  return (

    <div>
      {
        cart.map((item )=>{
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Precio ${item.price}</p>
              <p>Cant {item.quantity}</p>
              <button onClick={()=>deletProduct(item.id)}>Eliminar</button>
            </div>
          )
        })
      }
      <Link to={"/Checkout"}>
      <Button variant="container">Finalizar Compra</Button>
      </Link>
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  )
}

export default Cart
