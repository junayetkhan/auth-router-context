import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Head from '../Head';

const Main = () => {
    return (
        <div>
            
            <Head></Head>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;