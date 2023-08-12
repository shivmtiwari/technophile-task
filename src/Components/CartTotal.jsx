import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartTotal = () => {
    const navigate = useNavigate();

    const { getTotalTimesAdded, getTotalPrice } = useContext(CartContext);

    return (
        <div className='CartTotal'>
            <div>
                <p>Total added items: {getTotalTimesAdded()}</p>
                <p>Total Price: ₹ {Math.trunc(getTotalPrice())}</p>
            </div>
            <button onClick={()=>navigate('/account')} className='CheckOutBtn'>Checkout ({Math.trunc(getTotalPrice())})</button>
        </div>
    )
}

export default CartTotal