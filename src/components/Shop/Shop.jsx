import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
        const saveCart = [];
        for(const id in storedCart){
            // const saveProduct = product.find(product => product.id === id);
            // console.log(saveProduct);
            const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
            
        }
        setCart(saveCart);
    }, [products]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container grid grid-cols-12 gap-5 w-auto'>
            <div className='product-container grid md:col-span-10 col-span-12 md:grid-cols-3 gap-10 mt-10 md:px-20 md:ml-20  '>
                {
                    products.map((product, index) => <Product 
                    product={product}
                    key = {index}
                    addToCart = {addToCart}
                    ></Product>)
                }
            </div>
            <div className='md:col-span-2 col-span-12 bg-orange-200 p-4'>
                <Cart 
                cart = {cart}
                handleClearCart={handleClearCart}
                >
                    <Link to="/orders">
                        <button className='text-xl font-medium bg-yellow-500 text-white w-full p-3 rounded-lg'>Review Order <FontAwesomeIcon icon={faArrowRight}/></button> 
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;