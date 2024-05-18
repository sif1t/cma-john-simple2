import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // const cart = props.cart; // option 1
    const { cart } = props; // option 2
    return (
        <div className='cart'>
            <h4>order samary</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>Total Price: </p>
            <p>Total Shipping:</p>
            <h6>Grand Total:</h6>

        </div>
    );
};

export default Cart; 
<p></p>