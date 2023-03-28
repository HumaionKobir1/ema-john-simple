import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {key, img, name, seller, ratings ,quantity, price} = props.product;

    const addToCart = props.addToCart;
    return (

        <div className='product border-2 border-gray-300 rounded-lg relative shadow-lg shadow-indigo-500/40'>
            <img className='rounded-xl p-5 w-full h-96' src={img} alt="" />
            <div className='p-2'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <h3 className='text-lg font-medium mb-3'>Price: ${price}</h3>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => addToCart(props.product)} className='btn-cart bg-orange-200  hover:bg-orange-400 font-medium w-full p-4 absolute bottom-0 rounded-md' >Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>









        // <div class="flex justify-center">
        //     <div
        //         class="block max-w-sm rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
        //         <img className='rounded-lg' src={img} alt="" />
        //         <div class="p-6">
        //             <h1 className='text-xl font-semibold mt-4'>{name}</h1>
        //             <h3 className='text-lg font-medium'>Price: ${price}</h3>
        //             <p>Manufacturer: {seller}</p>
        //             <p>Rating: {ratings}</p>
                
        //         </div>
        //         <div>
                    // <button onClick={() => addToCart(props.product)} className='bg-orange-200 p-3 top-auto w-full border-gray-400 border rounded-md'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        //         </div>
        //     </div>
        // </div>

    );
};

export default Product;