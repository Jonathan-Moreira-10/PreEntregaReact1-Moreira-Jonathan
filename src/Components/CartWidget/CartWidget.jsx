import {Link} from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
  return (
    <div>
      <Link to="/Cart" className="nav-link">
      <Badge badgeContent={3} color="primary">
      <ShoppingCartIcon />
     </Badge></Link>
       
    </div>
  )
}

export default CartWidget
