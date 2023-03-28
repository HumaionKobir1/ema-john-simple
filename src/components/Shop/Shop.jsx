import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        console.log(storedCart);
    }, [])

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container grid grid-cols-12 gap-5'>
            <div className='product-container grid col-span-10 grid-cols-3 gap-10 mt-10 p-5 md:px-20 ml-20 container mx-auto '>
                {
                    products.map((product, index) => <Product 
                    product={product}
                    key = {index}
                    addToCart = {addToCart}
                    ></Product>)
                }
            </div>
            <div className='col-span-2 bg-orange-200 p-4'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;