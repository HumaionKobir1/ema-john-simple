import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='shop-container grid grid-cols-12 gap-5'>
            <div className='product-container grid col-span-10 grid-cols-3 gap-10 mt-10 p-5 md:px-20 ml-20 container mx-auto '>
                <h1>Orders page: {products.length}</h1>
            </div>
            <div className='col-span-2 bg-orange-200 p-4'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Orders;