import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div className='container mx-auto grid grid-cols-4 justify-between gap-5'>
            <div className='col-span-3'>
                <h3 className='font-extrabold text-xl'>Product coming here: {products.length}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, inventore. Quidem corrupti laudantium quisquam nobis a. Voluptatum consequatur neque doloribus!</p>
            </div>
            <div className=''>
                <h3>Order summery</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt in illum dolores praesentium amet nihil pariatur, quam possimus quibusdam?</p>
            </div>
            
        </div>
    );
};

export default Shop;