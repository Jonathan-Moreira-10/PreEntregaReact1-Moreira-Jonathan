import './NavBar.css'
import '../../../public/assets/tienda-todo.jpeg'
import { FaShoppingCart } from "react-icons/fa";


const  NavBar =()=> {
    return (<>
    <div className="container-logs">
        <li><a href=''><img className='logos' src='https://res.cloudinary.com/dus60wpdw/image/upload/v1718279542/j9r1pzk9_s4lvfu.png'/></a></li>
        <li><a href=''><img className='logos-envidia' src='https://res.cloudinary.com/dus60wpdw/image/upload/v1718279541/g597g2dr_wxm7gf.png'/></a></li>
        <li><a href=''><img className='logos' src='https://res.cloudinary.com/dus60wpdw/image/upload/v1718279538/AMD_E_Wh_RGB_v3fp8w.png'/></a></li>
        <li><a href=''><img className='logos' src='https://res.cloudinary.com/dus60wpdw/image/upload/v1718279537/sxizqymp_hbk0qs.png'/></a></li>
        <li><a href=''><img className='logos' src='https://res.cloudinary.com/dus60wpdw/image/upload/v1718279538/asus-2_bogzux.png'/></a></li>
        
    </div>
        <div className='container-nav'>
            <a href=''><img className='logo' src='https://res.cloudinary.com/dus60wpdw/image/upload/v1718276040/gametech-logo-rec_vcoxd0.png'/></a>
        <nav className="container-ul">
            <ul className="ul-container">
                <li className="nav-link"><a href="">Home</a></li>
                <li className="nav-link"><a href="">About</a></li>
                <li className="nav-link"><a href="">Shop</a></li>
                <li className="nav-link"><a href="">Contact</a></li>
                <li className="nav-link"><a href="">Blog</a></li> 
             </ul>  
        </nav>
        <span><a  className="nav-link" href=''><FaShoppingCart className="cart-widget" /></a></span>
         </div>
        </>
    )
}
export default NavBar