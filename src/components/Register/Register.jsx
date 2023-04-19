import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../../images/google.png'
import { AuthContext } from '../providers/AuthProviders';


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState()

    const {user} = useContext(AuthContext);
    

    const handleShowPassword = event => {
        setShowPassword(event.target.checked);
    }


    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm);

        if(password !== confirm){
            setError('Your password did not match');
            return;
        }
        else if (password.length < 8){
            setError('Password must be 6 characters or longer');
            return;
        }
    }


    return (
        <div className='bg-fuchsia-600 p-5 rounded-lg mt-8 grid justify-center md:w-2/4 mx-auto'>

            <h4 className='text-3xl font-semibold mb-5 text-center'>Please Register</h4>

            <form onSubmit={handleSignUp} className='w-80 mx-auto'>
                <div className='mb-4'>
                    <label htmlFor="text" className="block text-gray-700 font-bold mb-2">Your name</label>
                    <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50' type="text" name='name' placeholder='Your name' required/>
                </div>

                <div className='mb-4'>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50' type="email" name='email' placeholder='Your Email' required/>
                </div>
                
                <div className='mb-2'>
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50' type={showPassword ? 'text' : 'password'} name='password' id='password' placeholder='Your password' required/>
                </div>

                <div className='mb-2'>
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                    <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50' type={showPassword ? 'text' : 'password'} name='confirm' id='confirm' placeholder='Your password' required/>
                </div>

                <div className='flex gap-1 justify-start'>
                    <input onClick={handleShowPassword}  type="checkbox" id="show-password" />
                    <label htmlFor="show-password">Show Password</label>
                </div>
                

                <div className='text-center mt-4 mb-4'>
                    <p className='text-lg font-medium text-red-900'>{error}</p>
                    <p className='text-lg font-medium text-green-800'>{user && <span>Humaion Kobir</span>}</p>
                </div>

                <div className="flex justify-start -mt-5">
                    <label className="text-gray-500 font-bold my-4 flex items-center">
                        <input className="leading-loose text-pink-600 top-0" type="checkbox"/>
                            <span className="ml-2 text-sm py-2 text-gray-600 text-left">Accept the
                                <a href="#"
                                    className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"> Terms and Conditions of the site
                                        </a> and
                                <a href="#"
                                    className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"> the information data policy.</a>
                            </span>
                    </label>
                </div>
                            <button className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" type="submit" value="Register">
                                Sing Up
                            </button>
            </form>
            <div className='mt-4 text-center'>
                <p>Already you have account? Please <Link to='/login' className=' text-green-300 hover:text-blue-800'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;