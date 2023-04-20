import React, {  useContext, useState } from 'react';
import google from '../../../images/google.png'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from.pathname || '/';

    const {signIn, signInWithGoogle} = useContext(AuthContext);
    console.log(signInWithGoogle);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error.message);
            setError((error.message).slice(10, 50))
        })
    }
    
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            setError((error.message).slice(10, 50))
        })
    }

    const handleShowPassword = event => {
        setShowPassword(event.target.checked);
        
    }

    return (
        <div className='mx-auto md:w-2/4 bg-white rounded-lg shadow-md p-8 mt-10'>
            <h1 className='text-2xl font-semibold text-center'>Please Login</h1>
            <form onSubmit={handleLogin} className="w-full max-w-sm mx-auto mt-10">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email"  name='email' id="email" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type={showPassword ? 'text' : 'password'} name='password' id="password" placeholder="Enter your password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>

                <div className='flex gap-1 justify-start'>
                    <input onClick={handleShowPassword}  type="checkbox" id="show-password" />
                    <label htmlFor="show-password">Show Password</label>
                </div>

                <div className='text-center mt-2 mb-6'>
                    <p className='text-lg font-medium text-red-900'>{error}</p>
                    <p className='text-lg font-medium text-green-800'></p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                    </button>
                    <a  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                    </a>
                </div>
            </form>
            <div className='mt-4 text-center'>
                <p>New to Ema-john? Please <Link to='/register' className='text-blue-500 hover:text-blue-800'>Create New Account</Link></p>
            </div>

            <div className=' text-center w-[42%] mx-auto mt-5 mb-3 border-2 py-2 px-4 flex gap-1 justify-center items-center'>
                <img className='w-6 h-6' src={google} alt="" />
                <button onClick={handleGoogleSignIn} className='btn btn-primary' >  Continue with Google</button>
            </div>

        </div>
    );
};

export default Login;