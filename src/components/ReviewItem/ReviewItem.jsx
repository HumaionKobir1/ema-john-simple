import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {img, id, name, price, quantity} = product;
    return (
        <div className='border-2 rounded-lg p-2 flex justify-between items-center h-36'>
            <div className='flex gap-5 items-center'>
                <img className='w-24 h-24 rounded-lg' src={img} alt="" />
                <div className='gap-1 grid items-center'>
                    <h2 className='md:text-2xl text-lg font-medium'>{name}</h2>
                    <p className='font-medium'>Price: <span className='text-yellow-400'>${price}</span></p>
                    <p className='font-normal'>Order Quantity: <span className='text-yellow-400'>{quantity}</span></p>
                </div>
            </div>
            <div>
                <button onClick={()=>handleRemoveFromCart(id)} className=''>remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;