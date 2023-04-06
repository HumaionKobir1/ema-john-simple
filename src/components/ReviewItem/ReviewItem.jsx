import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {img, id, name, price, quantity} = product;
    return (
        <div className='border-2 rounded-lg p-2 flex justify-between items-center'>
            <div className='flex gap-5 items-center'>
                <img className='w-24 h-24 rounded-lg' src={img} alt="" />
                <div className='gap-1 grid items-center'>
                    <h2 className='text-2xl font-medium'>{name}</h2>
                    <p className='font-medium'>Price: <span className='text-yellow-400'>${price}</span></p>
                    <p className='font-normal'>Order Quantity: <span className='text-yellow-400'>{quantity}</span></p>
                </div>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='rounded-full mr-5 bg-red-200 hover:bg-red-100 active:border-t-cyan-300 p-2 w-14 h-14'><TrashIcon className="h-10 w-10 text-red-500" /></button>
        </div>
    );
};

export default ReviewItem;