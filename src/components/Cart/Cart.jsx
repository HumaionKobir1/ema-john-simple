import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div>
            <h3 className='text-2xl text-center font-medium mb-5'>Order summery</h3>
            <p className='text-xl'>Selected Item: {cart.length}</p>
            <p className='text-xl mt-5 mb-5'>Total Price: ${total}</p>
            <p className='text-xl'>Total Shipping Charge: $10</p>
            <p className='text-xl mt-5 mb-5'>Tax: $114</p>
            <h3 className='text-2xl font-medium mb-16'>Grand Total: $175</h3>
            <button className='text-xl font-medium bg-red-600 text-white mb-4 w-full p-3 rounded-lg'>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
            <br />
            <button className='text-xl font-medium bg-yellow-500 text-white w-full p-3 rounded-lg'>Review Order <FontAwesomeIcon icon={faArrowRight}/></button>    
        </div>
    );
};

export default Cart;