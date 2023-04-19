import React, { useContext, useState } from 'react'
import logo from '../../../images/Logo.svg';
import { Link, NavLink } from 'react-router-dom'
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error.message))
    }

  return (
    <div className='bg-slate-900 text-white'>
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    <img src={logo} alt="" />
                </Link>

                {/* Nav Items Section */}
                <ul className='items-center hidden space-x-8 lg:flex text-lg'>
                <li>
                    <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                    Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/orders'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                    Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/inventory'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                    Manage Inventory
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                    to='/login'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                    Login
                    </NavLink>
                </li> */}
                <li>
                    {
                        user ? 
                            <div className=' ml-2'>
                                <span>{user.email}</span>
                                <button onClick={handleLogOut} className='btn btn-xs ml-2'>Sign out</button>
                                </div>
                            : <Link className='ml-5 btn btn-xs' to="/login">Login</Link>
                    }
                </li>
                </ul>

                <Link to='/register' className='inline-flex md:block items-center'>
                <button className='btn text-xl'>Register</button>
                </Link>

                {/* Mobile Navbar Section */}
                <div className='lg:hidden '>
                {/* Dropdown Open Button */}
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3BottomRightIcon className='w-5 text-gray-600' />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10 '>
                    <div className='p-5 bg-slate-900 text-white border rounded shadow-sm'>
                        {/* Logo & Button section */}
                        <div className='flex items-center justify-between mb-4'>
                        <div>
                            <Link to='/' className='inline-flex items-center'>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        {/* Dropdown menu close button */}
                        <div>
                            <button
                            aria-label='Close Menu'
                            title='Close Menu'
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <XMarkIcon className='w-5 text-gray-600' />
                            </button>
                        </div>
                        </div>
                        {/* Mobile Nav Items Section */}
                        <nav>
                        <ul className='space-y-4 text-white'>
                            <li>
                            <Link to='/' className='default'>
                                Shop
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/orders'
                                className='font-medium tracking-wide transition-colors duration-200 hover:text-blue-400'
                            >
                                Orders
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/inventory'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                Manage Inventory
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/login'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                Login
                            </Link>
                            </li>
                        </ul>
                        <Link to='/register' className='inline-flex mt-5 items-center  transition-colors duration-200 hover:text-blue-400'>
                            <button className='btn'>Register</button>
                        </Link>
                        </nav>
                    </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header






// import React from 'react';
// import logo from '../../../images/Logo.svg';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <nav className='bg-slate-900 text-white flex justify-between  md:px-40 py-4'>
//             <img src={logo} alt="" />
//             <div className='flex gap-14 items-center font-medium text-lg p-2'>
//                 <Link to="/">Shop</Link>
//                 <Link to="/orders">Orders</Link>
//                 <Link to="/inventory">Manage Inventory</Link>
//                 <Link to="/login">Login</Link>
//             </div>
//         </nav>



        
//     );
// };

// export default Header;


