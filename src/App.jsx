
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Homepage"
import Product from "./pages/Productpage"
import About from "./pages/About"
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {




  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/product' element={<Product />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/contact' element={<Contact />}> </Route>
        <Route path='/cart' element={<Cart />}> </Route>
      </Routes>
      <Footer />

    </BrowserRouter>

  )
}

export default App



