import React from 'react';
import './Product.css';

const Product = (props) => {
    const {key, img, name, seller, ratings ,quantity, price} = props.product;

    const addToCart = props.addToCart;
    return (
        <div className='product border rounded-md mx-auto w-90 mt-12 relative'>
                <img className='rounded-lg' src={img} alt="" />
                
                <div className='px-2'>
                    <h1 className='text-xl font-semibold mt-4'>{name}</h1>
                    <h3 className='text-lg font-medium'>Price: ${price}</h3>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>

                 
                <button onClick={() => addToCart(props.product)} className='bg-orange-200 p-3 absolute top-auto w-full border-gray-400 border rounded-md'>Add to Cart</button>

                              
        </div>
    );
};

export default Product;