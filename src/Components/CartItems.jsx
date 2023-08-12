import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { MdDeleteOutline } from 'react-icons/md'
import { BiPlus, BiMinus } from 'react-icons/bi'

const CartItems = () => {
  const { cartItems, removeFromCart, increaseqnty, decreaseqnty } = useContext(CartContext);

  return (
    <div className='cartItemsWrapper'>

      {cartItems.map((item) => (
        <div className="cartCard" key={item.id}>
          <img src={item.imgdata} alt="" />
          <div className='cartItemDetails'>
            <div>
              <h4>{item.rname}</h4>
              <span>₹ {item.price}</span>
            </div>
            <div className="CartItemBtns">
              <div className='qntyBtn'>
                <button onClick={() => decreaseqnty(item.id)}><BiMinus /></button>
                <p>{item.qnty}</p>
                <button onClick={() => increaseqnty(item.id)}><BiPlus /></button>
              </div>
              <button className='deleteBtn' onClick={() => removeFromCart(item.id)}><MdDeleteOutline className='deleteIcon' /></button> 
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartItems


