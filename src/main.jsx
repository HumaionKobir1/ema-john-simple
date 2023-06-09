import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Shop from './components/Shop/Shop'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Lyout/Home';
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import cartProductsLoader from './loaders/cartProductsLoader'
import CheckOut from './components/CheckOut/CheckOut'
import Register from './components/Register/Register'
import AuthProviders from './components/providers/AuthProviders'
import PrivateRouter from './components/router/PrivateRouter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <PrivateRouter><Inventory></Inventory></PrivateRouter>
      },
      {
        path: 'checkout',
        element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />

    </AuthProviders>
  </React.StrictMode>,
)
