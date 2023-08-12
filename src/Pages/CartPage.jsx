import React, { useContext } from 'react'
import CartItems from '../Components/CartItems'
import { CartContext } from '../Context/CartContext'
import CartTotal from '../Components/CartTotal'
import emptyCart from '../assests/PngItem_4803503.png'

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='CartPage'>
      {cartItems.length === 0 ?
        <div className='emptyCart'>
          <img src={emptyCart} alt="" />
          <h4>Your Cart Is Empty</h4>
        </div> :
        < >
          <CartItems />
          <CartTotal />
        </>
      }
    </div>
  )
}

export default CartPage