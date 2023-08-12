import React from 'react'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './Pages/CartPage'
import AccountPage from './Pages/AccountPage'
import { CartProvider } from './Context/CartContext'
const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/account' element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>

  )
}

export default App