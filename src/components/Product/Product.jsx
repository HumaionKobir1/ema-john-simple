import React from 'react';

const Product = (props) => {
    const {key, img, name, seller, quantity, price} = props.product;
    return (
        <div className='border rounded-md p-2'>
                <img className='rounded-lg' src={img} alt="" />
                <h1 className='text-xl font-semibold'>{name}</h1>
                <h3 className='text-lg font-medium'>Price: ${price}</h3>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {quantity}</p>

                <button>Add to Cart</button>
                
        </div>
    );
};

export default Product;