import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import { AplicationLayout } from './styled-components/aplication-layout.styled'
import HomePage from './pages/HomePage/HomePage'
import { MyContextProvider } from './context/ClothesContext'
import ShoppingBag from './pages/ShoppingBag/ShoppingBag'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Checkout from './pages/Checkout/Checkout'

function App() {

  return (
    <MyContextProvider>
      <AplicationLayout>
        <div className='nav'>
          <Nav />
        </div>
        <div className='content'>
          <Routes>
            <Route path="/birthday_page" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/shopping-bag" element={<ShoppingBag />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </AplicationLayout>
    </MyContextProvider>
  )
}

export default App
