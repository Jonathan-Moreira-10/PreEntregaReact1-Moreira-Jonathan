import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer"
import NavBar from "./Components/NavBar/NavBar"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Cart from "./Pages/Cart/Cart";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";

function App() {

  return ( 
     <BrowserRouter>
        <Routes>
          <Route element ={<NavBar />}>

           <Route path = "/" element = {<ItemListContainer />} />

           <Route path = "/category/:category" element = {<ItemListContainer />} />

           <Route path = "/Cart" element ={<Cart/>} />
           
           <Route path = "/ItemDetail/:id" element = {<ItemDetailContainer/>} />

           </Route>
           </Routes>
     </BrowserRouter>
  ) ;


       
  

}

export default App
