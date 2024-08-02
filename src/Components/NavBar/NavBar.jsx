import './NavBar.css'

import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom"

const  NavBar =()=> {
    return (
    <div>
    <>
    <div className="container-logs">
        <li><Link to=""><img className='logos' src='https://res.cloudinary.com/dus60wpdw/image/upload/v1718279542/j9r1pzk9_s4lvfu.png'/></Link></li>
        <li><Link to=""><img className='logos-envidia' src="https://res.cloudinary.com/dus60wpdw/image/upload/v1718279541/g597g2dr_wxm7gf.png"/></Link></li>
        <li><Link to=""><img className='logos' src='https://res.cloudinary.com/dus60wpdw/image/upload/v1718279538/AMD_E_Wh_RGB_v3fp8w.png'/></Link></li>
        <li><Link to=""><img className='logos' src='https://res.cloudinary.com/dus60wpdw/image/upload/v1718279537/sxizqymp_hbk0qs.png'/></Link></li>
        <li><Link to=""><img className='logos' src='https://res.cloudinary.com/dus60wpdw/image/upload/v1718279538/asus-2_bogzux.png'/></Link></li>
        
    </div>
        <div className='container-nav'>
            <Link to="/"><img className='logo' src='https://res.cloudinary.com/dus60wpdw/image/upload/v1718276040/gametech-logo-rec_vcoxd0.png'/></Link>
        <nav className="container-ul">
            <ul className="ul-container">
                <Link className="nav-link" to="/">Productos</Link>
                <Link className="nav-link" to="/category/Procesadores">Procesadores</Link>
                <Link className="nav-link" to="/category/Motherboard">Motherboards</Link>
                <Link className="nav-link">Blog</Link> 
             </ul>  
        </nav>
        <>{<CartWidget/>}</>
         </div>
        </>
        </div>
     )
}
export default NavBar