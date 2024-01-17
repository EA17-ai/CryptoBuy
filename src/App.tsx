import { Route, Routes } from 'react-router'
import Store from './pages/Store'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar'
import {  ShoppingCartProvider } from './context/ShoppingCartContext'
import Cart from './pages/Cart'





const App = () => {

  
  
  
  return (
      <div>
        <ShoppingCartProvider>
        <NavBar />
        <Routes>
        <Route path="/store" element={<Store/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes >

        </ShoppingCartProvider>

        
      </div>
      
        
        
  )
}

export default App;
