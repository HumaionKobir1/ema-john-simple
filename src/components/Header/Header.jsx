import React from 'react';
import logo from '../../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-slate-900 text-white flex justify-between  md:px-40 py-4'>
            <img src={logo} alt="" />
            <div className='flex gap-14 items-center font-medium text-lg p-2'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;