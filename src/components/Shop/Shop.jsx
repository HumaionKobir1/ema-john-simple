import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container grid grid-cols-12 gap-5'>
            <div className='product-container grid col-span-10 grid-cols-3 gap-10 mt-10 p-5 md:px-20 ml-20 container mx-auto '>
                {
                    products.map(product => <Product 
                    product={product}
                    addToCart = {addToCart}
                    ></Product>)
                }
            </div>
            <div className='col-span-2 bg-orange-200 p-4'>
                <h3 className='text-2xl text-center font-medium mb-5'>Order summery</h3>
                <p className='text-xl'>Selected Item: {cart.length}</p>
                <p className='text-xl mt-5 mb-5'>Total Price: $100</p>
                <p className='text-xl'>Total Shipping Charge: $10</p>
                <p className='text-xl mt-5 mb-5'>Tax: $114</p>
                <h3 className='text-2xl font-medium mb-16'>Grand Total: $175</h3>
                <button className='text-xl font-medium bg-red-600 text-white mb-4 w-full p-3 rounded-lg'>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
                <br />
                <button className='text-xl font-medium bg-yellow-500 text-white w-full p-3 rounded-lg'>Review Order <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
        </div>
    );
};

export default Shop;