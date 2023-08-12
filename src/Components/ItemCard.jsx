import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { BiPlus, BiMinus } from 'react-icons/bi'

const ItemCard = ({ item }) => {
    const { addToCart, cartItems, increaseqnty, decreaseqnty } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(item);
    };

    const existingitem = cartItems.find((cartItem) => cartItem.id === item.id);


    console.log(item)
    return (
        <div className='ItemCard'>
            <div className="ItemDetail">
                <h4>{item.rname}</h4>
                <span>₹ {item.price}</span>
                <hr />
                <p>{item.address}</p>
            </div>
            <div className="ItemImgAndBtn">
                <img src={item.imgdata} alt="" />
                <div className="btns">
                    {
                        existingitem ?
                            <div className='qntyBtn'>
                                <button onClick={() => decreaseqnty(item.id)}><BiMinus /></button>
                                <p>{existingitem.qnty}</p>
                                <button onClick={() => increaseqnty(item.id)}><BiPlus /></button>
                            </div>
                            :
                            <button onClick={handleAddToCart} className='addToCartBtn'>+ ADD</button>
                    }
                </div>
            </div>

        </div>
    )
}

export default ItemCard