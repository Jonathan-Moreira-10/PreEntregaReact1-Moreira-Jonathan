import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer"

import {BrowserRouter, Routes,Route} from "react-router-dom"
import Cart from "./Pages/Cart/Cart";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./Pages/checkout/Checkout";
import { CartContextProvider } from "./Context/CartContext";
import Layout from "./Components/Layout/Layout";

function App() {

  return ( 
     <BrowserRouter>
     <CartContextProvider>
        <Routes>
          <Route element ={<Layout />}>

           <Route path = "/" element = {<ItemListContainer />} />

           <Route path = "/category/:category" element = {<ItemListContainer />} />

           <Route path = "/Cart" element ={<Cart/>} />
           
           <Route path = "/ItemDetail/:id" element = {<ItemDetailContainer/>} />
           <Route path="/Checkout" element={<Checkout/>}  />

           </Route>
           </Routes>
           </CartContextProvider>
           
     </BrowserRouter>
  ) ;


       
  

}

export default App
