import React from 'react';
import logo from '../../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='bg-slate-900 text-white flex justify-around py-3'>
            <img src={logo} alt="" />
            <div className='flex gap-10 items-center'>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;