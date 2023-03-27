import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div className='container mx-auto grid grid-cols-4 gap-5'>
            <div className='col-span-3'>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        products.map(product => <Product 
                            product={product}
                        ></Product>)
                    }
                </div>
                
            </div>
            <div className=''>
                <h3>Order summery</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt in illum dolores praesentium amet nihil pariatur, quam possimus quibusdam?</p>
            </div>
            
        </div>
    );
};

export default Shop;