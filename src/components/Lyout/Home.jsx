import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header> 3x4567</Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;