import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container grid grid-cols-12 gap-5'>
            <div className='product-container grid col-span-10 gap-6 mt-10 p-5 md:px-20 ml-20 container mx-auto '>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromCart = {handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='col-span-2 bg-orange-200 p-4'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link>
                        <button className='text-xl font-medium bg-yellow-500 text-white w-full p-3 rounded-lg'>Proceed Checkout <FontAwesomeIcon icon={faArrowRight}/></button> 
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;