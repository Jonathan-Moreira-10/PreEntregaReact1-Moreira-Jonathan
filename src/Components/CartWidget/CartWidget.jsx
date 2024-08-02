import {Link} from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const CartWidget = () => {
  //Dame el carrito

  const {cart} = useContext(CartContext);

  return (
    <div>
      <Link to="/Cart" className="nav-link">
      <Badge badgeContent={cart.length} color="primary" showZero={true}>
      <ShoppingCartIcon />
     </Badge></Link>
       
    </div>
  )
}

export default CartWidget
