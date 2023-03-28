import React from 'react';
import logo from '../../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='bg-slate-900 text-white flex justify-between  md:px-40 py-4'>
            <img src={logo} alt="" />
            <div className='flex gap-14 items-center font-medium text-lg p-2'>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;